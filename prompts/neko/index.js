const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://nekos.life/api/v2/img/neko' + nt.arguments.slice(0).join(' ').replace(' ', '%20')
  request(endpoint, (error, response, body) => {
    if (error) { message.reply(error); return }
    const result = JSON.parse(body)
    message.channel.send({
      files: [result.url]
    })
  })
}
