module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let user
  if (nt.arguments[0]) {
    if (nt.arguments[0].startsWith('<@')) {
      user = message.mentions.users.first()
    }
  } else {
    user = message.author
  }
  if (user) {
    message.reply(user.avatarURL)
  } else {
    message.reply(nt.i('invalidAvatar'))
  }
}
