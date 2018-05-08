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
        .catch(error => {
          console.error(error)
          message.reply(error)
          return
        })
      const result = query.q
      if (result === undefined) {
        message.reply(nt.translations.search.not_found)
        return
      }
      message.reply(nt.translations.search.result + result)
    })
  } catch (error) {
    message.reply(nt.translations.search.error + error)
  }
}
