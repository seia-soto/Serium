const translate = require('google-translate-query')
const PreferenceIndicator = require('@structures/PreferenceIndicator')

let basedEmbed = {
  embed: {
    title: message._se.translates.translations,
    description: null,
    fields: []
  }
}

const Prompt = (message, client) => {
  if (message._se.data.length < 2) {
    return message.reply(message._se.translates.keywordMissing)
  }

  const toTranslate = message._se.data.slice(1).join(' ')
  const toLanguage = message._se.data[0]

  translate(toTranslate, { to: toLanguage })
    .then(response => {
      basedEmbed.embed.description = message._se.translates.translateConversation.bind({
        from: response.from.language.iso,
        to: toLanguage,
        result: response.text
      })

      message.channel.send(basedEmbed)
    })
    .catch(error => {
      console.error(error)

      message.reply(message._se.translates._errors.unknownFailure)
    })
}
const Properties = {
  name: 'translate',
  usage: 'translate <Langauge-Code(Two char)> <string>',

  alias: ['tr'],
  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
