const cheerio = require('cheerio')
const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const translate = nt.i('wiki', true)
  const endpoint = 'https://namu.wiki/w/' + encodeURIComponent(nt.arguments.slice(0).join(' '))
  if (nt.arguments[0]) {
    try {
      request(endpoint, (error, response, body) => {
        if (error) { message.reply(error); return }
        const $ = cheerio.load(body)
        const title = $('title').text()
        let extract = $('div .wiki-heading-content').first().find('p').remove('img').text().replace(/<(?:.|\n)*?>/gm, '\n')
        if (!extract) {
          extract = nt.i('noResult_fromRemote')
        } else if (extract.length > 991) {
          extract = extract.substr(0, 990) + '...'
        }
        message.channel.send({embed: {
          color: 16761035,
          author: {
            icon_url: 'https://seia-soto.github.io/assets/images/namuwiki.png',
            name: title
          },
          title: nt.i('menu', true),
          description: '[' + nt.i('keepReading').replace('{source}', '나무위키') + '](' + endpoint + '); ' + title.replace(' - 나무위키', '') +
          '\n[' + nt.i('edit', true) + title.replace(' - 나무위키', ' ') + '](' + endpoint.replace('/w', '/edit') + ')',
          fields: [
            {
              name: nt.i('introduction', true),
              value: extract
            }
          ]
        }})
      })
    } catch (error) {
      message.reply(nt.i('parseError_fromRemote'))
    }
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
