const google = require('./google')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0] === undefined) {
    message.reply(nt.i('emptyParameter'))
    return
  }
  google.resultsPerPage = 1
  let nextCounter = 0
  google(nt.arguments.slice(0).join(' '), (error, response) => {
    if (error) { message.reply(error); return }
    const conclusion = response.link[0]
    message.channel.send({embed: {
      color: 16761035,
      title: nt.i('searchResult'),
      description: '**[' + conclusion.title + '](' + conclusion.href + ')**' +
      '\n' + conclusion.description
    }})
  })
}
