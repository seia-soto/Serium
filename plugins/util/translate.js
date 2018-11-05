const _translate = require('google-translate-query')

const dictionary = require('../')
const properties = require('../../scopes/properties')

module.exports = (client, message, data, translate) => {
  const context = {
    to: data.message.index.diff[0],
    what: data.message.index.diff.slice(1).join(' ')
  }
  if (!context.to || !context.what) return message.channel.send({embed: {
      color: data.application.embed.color,
      author: {
        name: `${translate.help.title[1]}; translate`
      },
      description: translate.generic.descriptions.translate,
      fields: [
        {
          name: translate.help.usage,
          value: `${properties.application.prefix}${dictionary.translate.usage}`
        }
      ],
      footer: {
        text: translate.help.detailed[1]
      }
    }})

  _translate(context.what, {
    to: context.to
  }).then(response => {
    message.channel.send({embed: {
      color: data.application.embed.color,
      title: 'Translate',
      fields: [
        {
          name: translate.translate.origin,
          value: response.from.language.iso
        },
        {
          name: translate.translate.translated,
          value: response.text
        }
      ],
      footer: {
        text: 'Powered by Google Translate'
      }
    }})
  })
}
