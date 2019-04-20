const fs = require('fs')
const path = require('path')

const PreferenceIndicator = require('../../structures/PreferenceIndicator')

const InPath = path.join(__dirname, '../')

let documentEmbed = {
  embed: {
    title: 'Sewritten',
    description: PreferenceIndicator.App.Externals.PromotionLines.description,
    fields: [],
    image: {
      url: 'attachment://banner.png'
    },
    files: [
      {
        attachment: path.join(__dirname, '../../assets/images/banner.png'),
        name: 'banner.png'
      }
    ],
    footer: {
      text: 'Copyright 2019 Seia-Soto. All rights reserved. 언제나 사용해주셔서 감사해요 >~<'
    }
  }
}
fs.readdirSync(InPath).forEach(category => {
  if (category === 'index.js') return

  // NOTE: Scan static tree.
  let field = {
    name: category.charAt(0).toUpperCase() + category.slice(1),
    value: '',
    inline: true
  }

  fs.readdirSync(`${InPath}${category}`).forEach(prompt => {
    if (prompt === 'index.js') return

    field.value += `\`${prompt.replace('.js', '')}\` `
  })
  documentEmbed.embed.fields.push(field)
})

const Plan = (message, client) => {
  message.channel.send(documentEmbed)
}
const Properties = {
  name: 'help',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
