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
  let presence
  if (user.presence.status !== null) {
    presence = user.presence.status.name
  } else {
    presence = nt.i('notplaying')
  }
  const embed = new Discord.RichEmbed()
    .setTitle(user.username)
    .setAuthor(user.tag, user.avatarURL)
    .setColor(16761035)
    .setDescription(nt.i('signedupAt').replace('{date}', user.createdAt))
    .setThumbnail(user.avatarURL)
    .setURL(user.avatarURL)
    .addField(nt.i('endpoints', true),
    '**' + nt.i('bot', true) + '** ' + user.bot +
    '\n**' + nt.i('web', true) + '** ' + user.client.browser, true)
    .addField(nt.i('presence', true),
    '**' + nt.i('status', true) + '** ' + user.presence.status +
    '\n**' + nt.i('game', true) + '** ' + presence, true)
  message.channel.send({embed})
}
