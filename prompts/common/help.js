const prompts = require('../')
const PreferenceIndicator = require('../../structures/PreferenceIndicator')

const Plan = (message, client) => {

  message.channel.send({
    embed: {
      title: 'Sewritten',
      description: PreferenceIndicator.App.Externals.PromotionLines.description,
      image: {
        url: 'https://app.seia.io/Serium/assets/images/banner.png'
      }
    }
  })
}
const Properties = {
  name: 'help',
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
