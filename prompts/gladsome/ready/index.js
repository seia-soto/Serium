const fs = require('fs')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let last = require('../../../data/prompts/ready/index.json')
  last.count = last.count + 1
  fs.writeFile('./data/prompts/ready/index.json', JSON.stringify(last), (error) => {
    if (error) { console.error(error); return }
  })
  message.reply(nt.i('readyPlayer').replace('{number}', last.count))
}
