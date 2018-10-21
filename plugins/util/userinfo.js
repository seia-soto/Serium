const Discord = require('discord.js')

module.exports = (client, message, data, translate) => {
  const mentioned = message.mentions.members.first()
  let user = message.member
  if (mentioned && mentioned.id) user = mentioned

  let roles = ''
  user._roles.forEach(role => {
    roles += ` <@&${message.guild.roles.get(role).id}>`
  })

  let game = user.presence.game || translate.userinfo.notplaying
  if (typeof user.presence.game === Object) game = user.presence.game.name

  const embed = new Discord.RichEmbed()
    .setAuthor(user.user.username, user.user.avatarURL)
    .setColor(data.application.embed.color)
    .setThumbnail(user.user.avatarURL)

    .addField('ID', user.id, true)
    .addField(translate.userinfo.nickname, user.nickname, true)
    .addField(translate.userinfo.status, user.presence.status, true)
    .addField(translate.userinfo.presence, game, true)
    .addField(translate.userinfo.joined, new Date(user.joinedTimestamp).toDateString(), true)
    .addField(translate.userinfo.roles, roles, true)
  message.channel.send({embed})
}
