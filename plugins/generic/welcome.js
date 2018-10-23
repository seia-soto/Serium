module.exports = (client, message, data, translate) => {
  const as = data.message.index.raw.slice(1).join(' ')
  let reply = `**${as}**${translate.welcome.updated}`

  data.stores.guilds[message.guild.id] = {
    welcome: {
      channel: message.channel.id,
      message: as
    }
  }
  if (data.stores.guilds[message.guild.id] && as === 'none') {
    data.stores.guilds[message.guild.id].welcome = undefined
    reply = translate.welcome.disabled
  }

  data.assets.emit('modified', 'guilds', data.stores.guilds)
  message.reply(reply)
}
