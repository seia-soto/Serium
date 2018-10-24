const dictionary = require('../')
const properties = require('../../scopes/properties')

module.exports = (client, message, data, translate) => {
  const as = data.message.index.raw.slice(1).join(' ')
  const disabled = ['off', 'disable', 'turn off', 'none']
  if (!as) return message.channel.send({embed: {
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

  let reply = `**${as}**${translate.welcome.updated}`

  data.stores.guilds[message.guild.id] = {
    welcome: {
      channel: message.channel.id,
      message: as
    }
  }
  if (data.stores.guilds[message.guild.id] && disabled[as]) {
    data.stores.guilds[message.guild.id].welcome = undefined
    reply = translate.welcome.disabled
  }

  data.assets.emit('modified', 'guilds', data.stores.guilds)
  message.reply(reply)
}
