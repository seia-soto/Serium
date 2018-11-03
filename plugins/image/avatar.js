const Discord = require('discord.js')

module.exports = (client, message, data, translate) => {
  const mentioned = message.mentions.members.first()
  let user = message.member
  if (mentioned && mentioned.id) user = mentioned

  const embed = new Discord.RichEmbed()
    .setAuthor(user.user.username, user.user.avatarURL)
    .setColor(data.application.embed.color)
    .setImage(user.user.avatarURL)
  message.channel.send({embed})
}
