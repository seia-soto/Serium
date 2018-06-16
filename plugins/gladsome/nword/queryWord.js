const cheerio = require('cheerio')
const request = require('request')
module.exports = (stringFor) => {
  const querystring = encodeURIComponent(stringFor)
  const endpoint = 'https://dict.naver.com/search.nhn?dicQuery=' + encodedString + '&query=' + encodedString + '&target=dic&ie=utf8&query_utf=&isOnlyViewEE='
  request(endpoint, (error, response, body) => {
    if (error) { return error }
    const $ = cheerio.load(body)
    const text = $('span .c_b').first().text()
    return text
  })
}
