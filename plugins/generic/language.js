const fs = require('fs')

const translations = require('../../translations').library

module.exports = (client, message, data, translate) => {
  const selection = data.message.index.raw[1]
  if (selection in translations) {
    let assets = JSON.parse(fs.readFileSync('./assets/users.json', 'utf8'))
    assets[message.author.id].language = selection
    fs.writeFileSync('./assets/users.json', JSON.stringify(assets), 'utf8')
    data.assets.emit('modified')

    message.reply(`**${selection}**${translate.language.updated}`)
  } else {
    message.reply(`**${selection}**${translate.language.notfound}`)
  }
}
