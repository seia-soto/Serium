const PreferenceIndicator = require('@structures/PreferenceIndicator')
let PromptIndicator = null

let helpEmbed = {
  embed: {
    title: 'Help',
    description: PreferenceIndicator.App.Externals.PromotionLines.description,
    fields: [],
    footer: {
      text: 'Copyright 2019 Seia-Soto. All rights reserved.'
    }
  }
}

// NOTE: Due to circular dependency issue, reference at nextTick(means reference after all done) to resolve issue.
process.nextTick(() => {
  const prompts = require('@prompts')
  PromptIndicator = require('@structures/PromptIndicator')

  Object.keys(prompts).forEach(category => {
    const field = {
      name: category.charAt(0).toUpperCase() + category.slice(1),
      value: ''
    }

    Object.keys(prompts[category]).forEach(prompt => field.value += '`' + prompt + '` ')
    helpEmbed.embed.fields.push(field)
  })
})

const Prompt = (message, client) => {
  const selection = message._se.data[0]

  if (selection && selection in PromptIndicator) {
    const properties = PromptIndicator[selection].properties

    message.channel.send({
      embed: {
        title: `도움말: ${properties.name}`,
        description: properties.description,
        fields: [
          {
            name: '사용법',
            value: '``' + properties.usage + '``'
          }
        ],
        footer: {
          text: 'Copyright 2019 Seia-Soto. All rights reserved.'
        }
      }
    })
  } else {
    message.channel.send(helpEmbed)
  }
}
const Properties = {
  name: 'help',
  description: '이 앱에서 사용가능한 명령 셋을 가져옵니다.',
  usage: 'help [명령]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
