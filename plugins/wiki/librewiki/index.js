const cheerio = require('cheerio')
const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const selector = encodeURIComponent(nt.arguments.slice(0).join(' '))
  const endpoint = 'https://librewiki.net/api.php?action=parse&format=json&page=' + selector
  if (nt.arguments[0]) {
    try {
      request(endpoint, (error, response, body) => {
        if (error) { message.reply(error); return }
        const result = JSON.parse(body)
        let output = nt.i('noResult_fromRemote')
        if (result.parse.properties) {
          output = result.parse.properties[0]['*']
          if (output.length > 991) {
            output = extract.substr(0, 990) + '...'
          }
        }
        const title = result.parse.title
        message.channel.send({embed: {
          color: 16761035,
          author: {
            icon_url: 'https://seia-soto.github.io/assets/images/librewiki.png',
            name: title + ' - 리브레위키'
          },
          title: nt.i('menu', true),
          description: '[' + nt.i('keepReading').replace('{source}', '리브레위키') + '](https://librewiki.net/wiki/' + selector + '); ' +
          title + '\n[' + title + ' ' + nt.i('edit', true) + '](https://librewiki.net/index.php?title=' + selector + '&action=edit)',
          fields: [
            {
              name: nt.i('introduction', true),
              value: output
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
