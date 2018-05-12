const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let user = message.mentions.users.first()
  if (user) {
    if (!user.id) {
      message.channel.send({embed: {
        color: 16761035,
        title: user.id,
        description: nt.i('noResult', nt.language)
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
    .setDescription(nt.i('userinfo', nt.language).when + user.createdAt)
    .setThumbnail(user.avatarURL)
    .setURL(user.avatarURL)
    .addField(nt.i('endpoints', nt.language),
    '**' + nt.i('bot', nt.language) + '** ' + user.bot +
    '\n**' + nt.i('web', nt.language) + '** ' + user.client.browser, true)
    .addField(nt.i('presence', nt.language),
    '**' + nt.i('status', nt.language) + '** ' + user.presence.status +
    '\n**' + nt.i('game', nt.language) + '** ' + user.presence.game, true)
  message.channel.send({embed})
}
