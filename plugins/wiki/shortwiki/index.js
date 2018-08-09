const cheerio = require('cheerio')
const request = require('request')
module.exports = (client, message, nt) => {
  const selector = encodeURIComponent(nt.parameters.slice(0).join(' '))
  const endpoint = 'https://shortwiki.tk/api.php?action=parse&format=json&page=' + selector
  if (nt.parameters[0]) {
    try {
      request(endpoint, (error, response, body) => {
        if (error) { message.reply(error); return }
        const result = JSON.parse(body)
        if (result.parse) {
          const $ = cheerio.load(result.parse.text['*'])
          output = $('p').first().text()
          title = result.parse.title
          if (output.length > 991) {
            output = extract.substr(0, 990) + '...'
          }
          if (output === '') output = nt.i('noResult_fromRemote')
          message.channel.send({embed: {
            color: 16761035,
            author: {
              icon_url: 'https://seia-soto.github.io/assets/images/shortwiki.png',
              name: title + ' - 쇼트위키'
            },
            title: nt.i('menu', true),
            description: '[' + nt.i('keepReading').replace('{source}', '쇼트위키') + '](https://shortwiki.tk/index.php/' + selector + '); ' +
            title + '\n[' + nt.i('edit', true) + title + ' ' + '](https://shortwiki.tk/index.php?title=' + selector + '&action=edit)',
            fields: [
              {
                name: nt.i('introduction', true),
                value: output
              }
            ]
          }})
        } else {
          message.reply(nt.i('noResult_fromRemote'))
        }
      })
    } catch (error) {
      message.reply(nt.i('parseError_fromRemote'))
    }
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
