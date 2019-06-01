const structures = require('@structures')
const vm2 = require('vm2')

const {DatabasePool, PermissionParser} = structures
const {VM} = vm2

const Prompt = (message, client) => {
  const opts = {
    action: (message._se.data[0] || ''),
    name: (message._se.data[1] || 'exception'),
    script: (message._se.data.slice(2).join(' ') || '')
  }

  const pluginNamePolicy =
    (opts.action.length > 12) ||
    (opts.name.length > 12) ||
    (!/^[a-zA-Z]+$/.test(opts.action)) ||
    (!/^[a-zA-Z]+$/.test(opts.name))
  if (pluginNamePolicy) return message.reply('플러그인의 이름은 12자 이하 영문만 사용가능해요!')

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
            return message.reply('이 서버에 플러그인을 추가하려면 관리자 권한이 필요해요!')
          }
          if (results.length >= 50) {
            connection.release()

            return message.reply('이미 너무 많은 플러그인을 설정하여 더 많은 플러그인을 설정할 수 없었어요!')
          }

          connection.query(`SELECT * FROM serium_plugins WHERE identify = ? AND name = ?`, [message.guild.id, opts.name], (queryError, results) => {
            let toExecute = `INSERT INTO serium_plugins (identify, name, script) VALUES (${message.guild.id}, ${connection.escape(opts.name)}, ${connection.escape(opts.script)})`

            if (results[0]) {
              toExecute = `UPDATE serium_plugins SET script = ${connection.escape(opts.script)} WHERE identify = ${message.guild.id} AND name = ${connection.escape(opts.name)}`
            }
            connection.query(toExecute, queryError => {
                if (queryError) {
                  connection.release()
                  console.log(queryError);

                  return message.reply('잠시 서비스에 문제가 생겨 플러그인을 지정하지 못했어요! 다시시도해주시겠어요?')
                }

                message.reply(`${opts.name} 플러그인을 지정했어요!`)
              }
            )
          })
          break;
        case 'remove':
          if (!PermissionParser.isValidFor('staff', message._se.permission)) {
            return message.reply('이 서버에서 플러그인을 제거하려면 관리자 권한이 필요해요!')
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
        default:
          if (plugins.indexOf(opts.action) === -1) {
            connection.release()

            return message.reply('그런 이름을 가진 플러그인을 찾을 수 없었어요!')
          } else {
            try {
              const virtualEnvironment = new VM({
                timeout: 1000 * 2,
                sandbox: {
                  seia: {
                    isKawaii: true
                  },
                  params: message._se.data.slice(1).join(' ') || [],
                  server: {
                    name: message.guild.name,
                    id: message.guild.id,
                    memberCount: message.guild.memberCount
                  },
                  user: {
                    name: message.author.username,
                    id: message.author.id,
                    mention: `<@${message.author.id}>`
                  },
                  post: toPost => message.channel.send(toPost)
                }
              })
              virtualEnvironment.run(results.find(result => result.name === opts.action).script)
            } catch (error) {
              message.reply(`플러그인 실행 중에 오류가 발생했어요!\n${error}`)
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
  usage: 'plugin (<set|remove|list> [plugin-name]> [script]|<plugin-name>)',

  alias: ['p'],
  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
