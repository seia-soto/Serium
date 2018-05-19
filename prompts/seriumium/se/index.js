const fs = require('fs')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let configures = require('../../../data').configures
  switch (nt.arguments[0]) {
    case 'blacklist':
      if (!nt.arguments[1]) {
        message.reply(nt.i('emptyParameter'))
        return
      }
      if (configures['blacklist'][nt.arguments[1]]) {
        configures['blacklist'][nt.arguments[1]] = undefined
        fs.writeFile('./data/configures/index.json', JSON.stringify(configures), (error) => {
          if (error) { console.error(error); return }
        })
        message.reply('Removed from blacklist; <@' + nt.arguments[1] + '>')
      } else {
        configures['blacklist'][nt.arguments[1]] = true
        fs.writeFile('./data/configures/index.json', JSON.stringify(configures), (error) => {
          if (error) { console.error(error); return }
        })
        message.reply('Added to blacklist; <@' + nt.arguments[1] + '>')
      }
      nt.application.emit('modifyed')
      break;
    default:
      message.reply('Empty.')
  }
}
