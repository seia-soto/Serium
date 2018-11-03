const translations = require('../../translations').library

module.exports = (client, message, data, translate) => {
  const selection = data.message.index.raw[1]
  let reply = `**${selection}**${translate.language.updated}`

  if (selection in translations) {
    data.stores.users[message.author.id] = {
      language: selection
    }
    data.assets.emit('modified', 'users', data.stores.users)
  } else {
    reply = `**${selection}**${translate.language.notfound}`
  }
  message.reply(reply)
}
