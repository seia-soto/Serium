const fs = require('fs')

module.exports = (output) => {
  console.log(output + new Date())
  fs.appendFile('./data/audit/logs.txt', output + new Date() + '\n', 'utf8', (error) => { if (error) console.error(error) })
}
