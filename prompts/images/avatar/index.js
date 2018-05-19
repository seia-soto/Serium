module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0]) {
    let user = message.mentions.users.first()
    message.reply(user.avatarURL)
      .catch(error => message.reply(error))
  } else {
    message.reply(message.author.avatarURL)
  }
}
