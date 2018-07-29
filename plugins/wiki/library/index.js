const request = require('request')
module.exports = (client, message, nt) => {
  const endpoints = {
    ko: 'https://ko.wikipedia.org/api/rest_v1/page/summary/',
    en: 'https://en.wikipedia.org/api/rest_v1/page/summary/'
  }
  const endpoint = endpoint[nt.l] + encodeURIComponent(nt.parameters.slice(0).join(' '))
  if (nt.parameters[0]) {
    try {
      request(endpoint, (error, response, body) => {
        if (error) { message.reply(error); return }
        let result = JSON.parse(body)
        if (nt.l !== 'en') result.extract = decodeURIComponent(result.extract)
        message.channel.send({embed: {
          color: 16761035,
          title: nt.i('library', true),
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
