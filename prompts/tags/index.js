const request = require('request')
const endpoint = process.env.Restdot + '/read'
let data
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  switch (nt.arguments[0]) {
    case 'set':
      try {
        request(`${process.env.Restdot}/set/${encodeURIComponent(nt.arguments[1])}/${encodeURIComponent(nt.arguments.slice(2).join(' ').replace('@here', '^@!?here').replace('@everyone', '^@!?everyone'))}`, (error, response, body) => {
          if (error) { message.reply(error); return }
          message.reply(nt.translations.tags.setted)
        })
      } catch (error) {
        message.reply(nt.translations.tags.parse_failed + error)
      }
      break
    case 'delete':
      try {
        request(`${process.env.Restdot}/delete/${encodeURIComponent(nt.arguments[1])}`, (error, response, body) => {
          if (error) { message.reply(error); return }
          message.channel.send(nt.translations.tags.deleted)
        })
      } catch (error) {
        message.reply(nt.translations.tags.parse_failed + error)
      }
      break
    default:
      try {
        if (nt.arguments[0]) {
          request(endpoint, (error, response, body) => {
            if (error) { message.reply(error); return }
            let data = JSON.parse(body)
            data = data[nt.arguments[0]]

            if (data.value !== undefined) {
              message.channel.send(decodeURIComponent(data.value))
            } else {
              message.reply(nt.translations.tags.not_found)
            }
          })
        } else {
          message.reply(nt.translations.tags.help)
        }
      } catch (error) {
        console.error(error)
      }
  }
}
