const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + nt.arguments.slice(0).join(' ').replace(' ', '%20')
  if (presets.arguments[0]) {
    request(endpoint, (error, response, body) => {
      if (error) { message.reply(error); return }
      const result = JSON.parse(body)
      message.channel.send({embed: {
        color: 16761035,
        title: result.title,
        description: result.extract
      }})
    })
  } else {
    message.reply(nt.translations.library.invaild_string)
  }
}
