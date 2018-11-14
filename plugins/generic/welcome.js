const dictionary = require('../')
const properties = require('../../scopes/properties')

module.exports = (client, message, data, translate) => {
  const to = data.message.index.raw.slice(1).join(' ')
  const disabled = ['off', 'disable', 'turn off', 'none']

  if (!to) return message.channel.send({embed: {
    color: data.application.embed.color,
    author: {
      name: `${translate.help.title[1]}; welcome`
    },
    description: translate.generic.descriptions.welcome,
    fields: [
      {
        name: translate.help.usage,
        value: `${properties.application.prefix}${dictionary.welcome.usage}`
      }
    ],
    footer: {
      text: translate.help.detailed[1]
    }
  }})

  let reply = `**${to}**${translate.welcome.updated}`

  data.assets.guilds[message.guild.id] = {
    welcome: {
      channel: message.channel.id,
      message: to
    }
  }
  if (disabled.includes(to)) {
    data.assets.guilds[message.guild.id].welcome = undefined
    reply = translate.welcome.disabled
  }

  data.assets.handle.emit('modified', 'guilds', data.assets.guilds)
  message.reply(reply)
}
