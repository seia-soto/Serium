const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://api.thedogapi.co.uk/v2/dog.php?limit=1'
  try {
    request(endpoint, (error, response, body) => {
      if (error) { message.reply(error); return }
      const result = JSON.parse(body)
      message.reply(result.data[0].url)
    })
  } catch (error) {
    message.reply(nt.i('parseError_fromRemote'))
  }
}
