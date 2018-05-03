const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let user = message.mentions.users.first()
  if (user) {
    if (!user.id) {
      message.channel.send({embed: {
        color: 16761035,
        title: nt.translations.userinfo.not_found.title,
        description: nt.translations.userinfo.not_found.description
      }})
      return
    }
  } else {
    user = message.author
  }
  let embed = new Discord.RichEmbed()
    .setTitle(user.username)
    .setAuthor(user.tag, user.avatarURL)
    .setColor(16761035)
    .setDescription(nt.translations.userinfo.endpoints.createdAt + user.createdAt)
    .setThumbnail(user.avatarURL)
    .setURL(user.avatarURL)
    .addField(nt.translations.userinfo.endpoints.title, nt.translations.userinfo.endpoints.bot + user.bot + nt.translations.userinfo.endpoints.web + user.client.browser, true)
    .addField(nt.translations.userinfo.presence.title, nt.translations.userinfo.presence.status + user.presence.status + nt.translations.userinfo.presence.game + user.presence.game, true)
  message.channel.send({embed})
}
