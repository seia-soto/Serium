const PreferenceIndicator = require('@structures/PreferenceIndicator')

let PromptIndicator = null
let PromptMap = new Array()

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
    PromptMap.push(field)
  })
})

const Prompt = (message, client) => {
  const selection = message._se.data[0]

  if (selection && selection in PromptIndicator) {
    const properties = PromptIndicator[selection].properties

    message.channel.send({
      embed: {
        title: message._se.translates.bind(message._se.translates.detailed.title, {pluginName: properties.name}),
        description: message._se.translates.detailed.usage.bind({usage: properties.usage})
      }
    })
  } else {
    message.channel.send({
      embed: {
        title: message._se.translates.help,
        description: message._se.translates.description,
        fields: PromptMap
      }
    })
  }
}
const Properties = {
  name: 'help',
  usage: 'help [command]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
