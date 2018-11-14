const translations = require('../../translations').library

module.exports = (client, message, data, translate) => {
  const selection = data.message.index.raw[1]
  let reply = `**${selection}**${translate.language.updated}`

  if (selection in translations) {
    data.assets.users[message.author.id] = {
      language: selection
    }
    data.assets.handle.emit('modified', 'users', data.assets.users)
  } else {
    reply = `**${selection}**${translate.language.notfound}`
  }
  message.reply(reply)
}
