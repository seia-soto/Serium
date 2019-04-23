const translate = require('google-translate-query')

const PreferenceIndicator = require('../../structures/PreferenceIndicator')

let basedEmbed = {
  embed: {
    title: '번역',
    description: null,
    fields: [],
    footer: {
      text: 'Google 번역에 기반합니다. (NPM; google-translate-query)'
    }
  }
}

const Plan = (message, client) => {
  if (message._se.data.length < 2) {
    return message.reply('앗... 뭘 번역해야 할까요?')
  }

  const toTranslate = message._se.data.slice(1).join(' ')
  const toLanguage = message._se.data[0]

  translate(toTranslate, { to: toLanguage })
    .then(response => {
      basedEmbed.embed.description = `**__${PreferenceIndicator.App.Externals.LanguageList[response.from.language.iso]}__에서 __${PreferenceIndicator.App.Externals.LanguageList[toLanguage]}__로 번역했어요.**\n\n${response.text}`

      message.channel.send(basedEmbed)
    })
    .catch(error => {
      console.error(error)

      message.reply('앗... 지금은 Google에 연결할 수 없었어요!')
    })
}
const Properties = {
  name: 'translate',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
