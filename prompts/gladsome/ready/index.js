const fs = require('fs')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let last = require('../../../data/ready/index.json')
  last.count = last.count + 1
  fs.writeFile('./data/ready/index.json', JSON.stringify(last), (error) => {
    if (error) { console.error(error); return }
  })
  message.reply(nt.i('ready') + ' **' + last.count + '**!')
}
