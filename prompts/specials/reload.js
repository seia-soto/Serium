const fs = require('fs')
const path = require('path')

const structures = require('../../structures')

const {NekosLifeAPIParser} = structures

const InPath = path.join(__dirname, '../')

const Plan = (message, client) => {
  fs.readdirSync(InPath).forEach(category => {
    if (category === 'index.js') return

    fs.readdirSync(`${InPath}${category}`).forEach(prompt => {
      if (prompt === 'index.js') return

      delete require.cache[require.resolve(module)]
    })
  })

  message.reply('모든 문서를 다시 검토했어요!')
}
const Properties = {
  name: 'reload',
  requiredPermission: 'suser'
}

module.exports = Plan
module.exports.properties = Properties
