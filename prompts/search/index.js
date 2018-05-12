const cheerio = require('cheerio')
const request = require('request')
const querystring = require('querystring')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://www.google.com/search?q=' + encodeURIComponent(nt.arguments.slice(0).join(' '))
  try {
    request(endpoint, (error, response, body) => {
      if (error) { message.reply(error); return }
      const $ = cheerio.load(body)
      const query = querystring.parse($('.r').first().find('a').first().attr('href').replace('/url?', ''))
      const result = query.q
      if (result === undefined) {
        message.reply(nt.i('noResult_fromRemote', nt.language))
        return
      }
      message.reply(nt.i('searchResult', nt.language) + ' ' + result)
    })
  } catch (error) {
    message.reply(nt.i('parseError_fromRemote') + ' ' + error)
  }
}
