const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let user = message.mentions.users.first()
  if (user) {
    if (!user.id) {
      message.channel.send({embed: {
        color: 16761035,
        title: user.id,
        description: nt.i('noResult')
      }})
      return
    }
  } else {
    user = message.author
  }
  const embed = new Discord.RichEmbed()
    .setTitle(user.username)
    .setAuthor(user.tag, user.avatarURL)
    .setColor(16761035)
    .setDescription(nt.i('userinfo').when + user.createdAt)
    .setThumbnail(user.avatarURL)
    .setURL(user.avatarURL)
    .addField(nt.i('endpoints'),
    '**' + nt.i('bot') + '** ' + user.bot +
    '\n**' + nt.i('web') + '** ' + user.client.browser, true)
    .addField(nt.i('presence'),
    '**' + nt.i('status') + '** ' + user.presence.status +
    '\n**' + nt.i('game') + '** ' + user.presence.game, true)
  message.channel.send({embed})
}
