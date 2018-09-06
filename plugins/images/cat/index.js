const cheerio = require('cheerio')
const request = require('request')
module.exports = (client, message, nt) => {
  const endpoint = 'http://thecatapi.com/api/images/get?format=html&results_per_page=1'
  try {
    request(endpoint, (error, response, body) => {
      if (error) { message.reply(error); return }
      const $ = cheerio.load(body)
      const result = $('img').attr('src')
      message.reply(result)
    })
  } catch (error) {
    message.reply(nt.i('parseError_fromRemote'))
  }
}
