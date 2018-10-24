const Minecraft = require('../../structures').functions.minestat

module.exports = (client, message, data, translate) => {
  const to = data.message.index.raw[1]
  if (!to) return message.reply(translate.minecraft.errros.parameter)

  const callback = result => {
    if (!Minecraft.online) return message.reply(translate.minecraft.errors.offline)
    message.channel.send({embed: {
      color: data.application.embed.color,
      author: {
        name: translate.minecraft.title
      },
      description: Minecraft.motd,
      fields: [
        {
          name: translate.minecraft.domain,
          value: to
        },
        {
          name: translate.minecraft.version,
          value: Minecraft.version
        },
        {
          name: translate.minecraft.players.current,
          value: Minecraft.current_players
        },
        {
          name: translate.minecraft.players.max,
          value: Minecraft.max_players
        }
      ],
      footer: {
        text: 'Powered by minestat'
      }
    }})
  }
  Minecraft.init(to, 25565, callback)
}
