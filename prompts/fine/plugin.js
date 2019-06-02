const fs = require('fs')
const path = require('path')
const vm2 = require('vm2')
const structures = require('@structures')

const {DatabasePool, PermissionParser} = structures
const {VM} = vm2

const pluginDataStoreRoot = path.join(__dirname, '..', '..', 'assets', 'plugin_data')

const getDataStoreName = (identify, pluginName) => {
  return `${identify}-${pluginName}.json`
}
const loadPluginData = storeName => {
  const storePath = `${pluginDataStoreRoot}/${storeName}`

  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, '{}', 'utf8')
  }
  const file = fs.readFileSync(storePath, 'utf8')

  return JSON.parse(file)
}
const savePluginData = (storeName, data) => {
  fs.writeFileSync(`${pluginDataStoreRoot}/${storeName}`, JSON.stringify(data), 'utf8')
}

const Prompt = (message, client) => {
  const opts = {
    action: (message._se.data[0] || ''),
    name: (message._se.data[1] || 'exception'),
    script: (message._se.data.slice(2).join(' ') || '')
  }

  DatabasePool.getConnection((connectionError, connection) => {
    if (connectionError) {
      connection.release()

      return message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
    }

    connection.query(`SELECT * FROM serium_plugins WHERE identify = ${message.guild.id}`, (queryError, results) => {
      if (queryError) {
        connection.release()

        return message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
      }

      const plugins = new Array()

      results.forEach(plugin => {
        plugins.push(plugin.name)
      })

      switch (opts.action) {
        case 'set':
          if (!PermissionParser.isValidFor('staff', message._se.permission)) {
            connection.release()

            return message.reply('이 서버에 플러그인을 추가하려면 관리자 권한이 필요해요!')
          }
          if (results.length >= 50) {
            connection.release()

            return message.reply('이미 너무 많은 플러그인을 설정하여 더 많은 플러그인을 설정할 수 없었어요!')
          }
          if (opts.name.length > 12) {
            connection.release()

            return message.reply('플러그인 이름은 12자 이하여야 해요.')
          }

          connection.query(`SELECT * FROM serium_plugins WHERE identify = ? AND name = ?`, [message.guild.id, opts.name], (queryError, results) => {
            let toExecute = `INSERT INTO serium_plugins (identify, name, script) VALUES (${message.guild.id}, ${connection.escape(opts.name)}, ${connection.escape(opts.script)})`

            if (results[0]) {
              toExecute = `UPDATE serium_plugins SET script = ${connection.escape(opts.script)} WHERE identify = ${message.guild.id} AND name = ${connection.escape(opts.name)}`
            }
            connection.query(toExecute, queryError => {
              connection.release()
              if (queryError) {
                return message.reply('잠시 서비스에 문제가 생겨 플러그인을 지정하지 못했어요! 다시시도해주시겠어요?')
              }

              message.reply(`${opts.name} 플러그인을 지정했어요!`)
            })
          })
          break;
        case 'remove':
          if (!PermissionParser.isValidFor('staff', message._se.permission)) {
            connection.release()

            return message.reply('이 서버에서 플러그인을 제거하려면 관리자 권한이 필요해요!')
          }
          if (opts.name.length > 12) {
            connection.release()

            return message.reply('플러그인 이름은 12자 이하여야 해요.')
          }

          if (plugins.indexOf(opts.name) === -1) {
            connection.release()

            return message.reply('그런 이름을 가진 플러그인을 찾을 수 없었어요!')
          } else {
            connection.query(`DELETE FROM serium_plugins WHERE identify = ? AND name = ?`, [message.guild.id, opts.name], removalError => {
              connection.release()

              if (removalError) return message.reply('잠시 서비스에 문제가 생겨 플러그인을 삭제하지 못했어요! 다시시도해주시겠어요?')
            })

            message.reply(`${opts.name} 플러그인을 삭제했어요!`)
          }
          break;
        case 'list':
          connection.release()

          message.channel.send({
            embed: {
              title: `${message.guild.name}의 플러그인`,
              description: plugins.join(', ') || '현재 추가된 플러그인이 없습니다!'
            }
          })
          break;
        case 'raw':
          connection.release()

          message.channel.send({
            embed: {
              title: opts.name,
              description: '```javascript\n' + results.find(result => result.name === opts.name).script + '```'
            }
          })
          break;
        default:
          if (plugins.indexOf(opts.action) === -1) {
            connection.release()

            return message.reply('그런 이름을 가진 플러그인을 찾을 수 없었어요!')
          } else {
            const dataStoreName = getDataStoreName(message.guild.id, opts.action)
            const pluginData = loadPluginData(dataStoreName)

            try {
              const virtualEnvironment = new VM({
                timeout: 1000 * 2,
                sandbox: {
                  seia: {
                    isKawaii: true
                  },
                  params: message._se.data.slice(1) || [],
                  server: {
                    name: message.guild.name,
                    id: message.guild.id,
                    memberCount: message.guild.memberCount,
                    region: message.guild.region,
                    verified: message.guild.verified,
                    afkTimeout: message.guild.afkTimeout
                  },
                  user: {
                    name: message.member.displayName,
                    id: message.member.id,
                    mention: `<@${message.member.id}>`,
                    color: message.member.displayHexColor,
                    lastMessage: message.member.lastMessage.content
                  },
                  channel: {
                    name: message.channel.name,
                    id: message.channel.id
                  },
                  post: toPost => message.channel.send((toPost || '(empty?)').toString().split('').slice(0, 2000).join('')),

                  // NOTE: Plug-in data store managements: Internal Data Store Bukkit
                  idsb: {
                    get: key => {
                      return pluginData[key]
                    },
                    set: (key, value) => {
                      pluginData[key] = value

                      savePluginData(dataStoreName, pluginData)
                    }
                  }
                }
              })

              virtualEnvironment.run(results.find(result => result.name === opts.action).script)
            } catch (error) {
              message.reply(`플러그인 실행 중에 오류가 발생했어요!\n${'```javascript\n' + error + '```'}`)
            }

            connection.release()
          }
      }
    })
  })
}
const Properties = {
  name: 'plugin',
  description: 'Extra command script space for users, also JavaScript based.',
  usage: 'plugin (<set|remove|list> [plugin-name]> [script]|<plugin-name> [params])',

  alias: ['p'],
  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
