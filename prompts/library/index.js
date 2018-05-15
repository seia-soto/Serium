const request = require('request')
const endpoint_i = {
  en: 'en',
  ko: 'ko'
}
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://' + endpoint_i[nt.language] || 'en' + '.wikipedia.org/api/rest_v1/page/summary/' + nt.arguments.slice(0).join(' ').replace(' ', '%20')
  if (nt.arguments[0]) {
    try {
      request(endpoint, (error, response, body) => {
        if (error) { message.reply(error); return }
        const result = JSON.parse(body)
        message.channel.send({embed: {
          color: 16761035,
          title: result.title,
          description: result.extract
        }})
      })
    } catch (error) {
      message.reply(nt.i('parseError_fromRemote'))
    }
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
