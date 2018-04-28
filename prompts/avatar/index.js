module.exports.permissions = 0
module.exports.execute = (client, message) => {
  if (presets.arguments[0]) {
    let user = message.mentions.users.first()
    message.channel.send(user.avatarURL)
      .catch(error => message.reply(error))
  } else {
    message.channel.send(message.author.avatarURL)
  }
}
