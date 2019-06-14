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

      return message.reply(message._se.translates._errors.databaseFailure)
    }

    connection.query(`SELECT * FROM serium_plugins WHERE identify = ${message.guild.id}`, (queryError, results) => {
      if (queryError) {
        connection.release()

        return message.reply(message._se.translates._errors.databaseFailure)
      }

      const plugins = new Array()

      results.forEach(plugin => {
        plugins.push(plugin.name)
      })

      switch (opts.action) {
        case 'set':
          if (!PermissionParser.isValidFor('staff', message._se.permission)) {
            connection.release()

            return message.reply(message._se.translates.permissionMissing)
          }
          if (results.length >= 50) {
            connection.release()

            return message.reply(message._se.translates.maximumLimitReached.bind({amount: 50}))
          }
          if (opts.name.length > 12) {
            connection.release()

            return message.reply(message._se.translates.maximumNameLengthExceeded)
          }

          connection.query(`SELECT * FROM serium_plugins WHERE identify = ? AND name = ?`, [message.guild.id, opts.name], (queryError, results) => {
            let toExecute = `INSERT INTO serium_plugins (identify, name, script) VALUES (${message.guild.id}, ${connection.escape(opts.name)}, ${connection.escape(opts.script)})`

            if (results[0]) {
              toExecute = `UPDATE serium_plugins SET script = ${connection.escape(opts.script)} WHERE identify = ${message.guild.id} AND name = ${connection.escape(opts.name)}`
            }
            connection.query(toExecute, queryError => {
              connection.release()
              if (queryError) {
                return message.reply(message._se.translates._errors.databaseFailure)
              }

              message.reply(message._se.translates.added.bind({pluginName: opts.name}))
            })
          })
          break;
        case 'remove':
          if (!PermissionParser.isValidFor('staff', message._se.permission)) {
            connection.release()

            return message.reply(message._se.translates.permissionMissing)
          }
          if (opts.name.length > 12) {
            connection.release()

            return message.reply(message._se.translates.maximumNameLengthExceeded)
          }

          if (plugins.indexOf(opts.name) === -1) {
            connection.release()

            return message.reply(message._se.translates.nothingFound.bind({pluginName: opts.name}))
          } else {
            connection.query(`DELETE FROM serium_plugins WHERE identify = ? AND name = ?`, [message.guild.id, opts.name], removalError => {
              connection.release()

              if (removalError) return message.reply(message._se.translates.databaseFailure)
            })

            message.reply(message._se.translates.deleted.bind({pluginName: opts.name}))
          }
          break;
        case 'list':
          connection.release()

          message.channel.send({
            embed: {
              title: message.guild.name,
              description: plugins.join(', ') || message._se.translates.nothingExists
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

            return message.reply(message._se.translates.nothingFound.bind({pluginName: opts.name}))
          } else {
            const dataStoreName = getDataStoreName(message.guild.id, opts.action)
            const pluginData = loadPluginData(dataStoreName)

            let postCounter = 0

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
                  post: toPost => {
                    if (postCounter > 4) {
                      return
                    } else {
                      postCounter++
                    }

                    message.channel.send((toPost || '(empty?)').toString().split('').slice(0, 2000).join(''))
                  },

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
              message.reply(`${message._se.translates.errorDuringExecution}\n${'```javascript\n' + error + '```'}`)
            }

            connection.release()
          }
      }
    })
  })
}
const Properties = {
  name: 'plugin',
  usage: 'plugin (<set|remove|list> [pluginName] [script]|<pluginName> [parameters])',

  alias: ['p'],
  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
