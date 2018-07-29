const google = require('./google')
module.exports = (client, message, nt) => {
  if (nt.parameters[0] === undefined) {
    message.reply(nt.i('emptyParameter'))
    return
  }
  google.resultsPerPage = 1
  let nextCounter = 0
  google(nt.parameters.slice(0).join(' '), (error, response) => {
    if (error) { message.reply(error); return }
    const conclusion = response.links[0]
    if (!conclusion) {
      message.reply(nt.i('notSearched').replace('{object}', nt.parameters.slice(0).join(' ')))
      return
    }
    message.channel.send({embed: {
      color: 16761035,
      title: nt.i('searchResult'),
      description: '**[' + conclusion.title + '](' + conclusion.href + ')**' +
      '\n' + conclusion.description
    }})
  })
}
