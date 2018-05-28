const cheerio = require('cheerio')
const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const translate = nt.i('wiki')
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
            icon_url: 'https://raw.githubusercontent.com/Seriumium/seriumium.github.io/master/cdn/seriumium/namuwiki.jpg',
            name: title
          },
          title: translate.quickmenu,
          description: '[' + translate.keep + '](' + endpoint + '); ' + title.replace(' - 나무위키', '') +
          '\n[' + title.replace(' - 나무위키', ' ') + translate.edit + '](' + endpoint.replace('/w', '/edit') + ')',
          fields: [
            {
              name: translate.content,
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
