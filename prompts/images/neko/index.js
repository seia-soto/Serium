const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://nekos.life/api/v2/img/neko'
  try {
    request(endpoint, (error, response, body) => {
      if (error) { message.reply(error); return }
      const result = JSON.parse(body)
      message.reply(result.url)
    })
  } catch (error) {
    message.reply(nt.i('parseError_fromRemote'))
  }
}
