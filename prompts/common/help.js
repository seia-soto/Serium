const prompts = require('../')
const structures = require('../../structures')

const {PreferenceIndicator} = structures

// NOTE: Construct help embed once, not eventually.
let helpEmbed = {
  embed: {
    title: 'Sewritten',
    fields: [],
    description: PreferenceIndicator.App.Externals.PromotionLines.description,
    image: {
      url: 'https://raw.githubusercontent.com/Seia-Soto/Serium/nightly/assets/images/banner.png'
    }
  }
}
prompts.forEach(prompt => {
  if (helpEmbed.fields.filter(field => field.name === prompt.properties.category)) {
    helpEmbed.fields[helpEmbed.fields.indexOf(prompt.properties.category)].value += '`' + prompt.properties.name + '` '
  } else {
    helpEmbed.fields.push({
      title: prompt.properties.category,
      value: '`' + prompt.properties.name + '` '
    })
  }
})

const Plan = (message, client) => {
  message.channel.send(helpEmbed)
}
const Properties = {
  name: 'help',
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
