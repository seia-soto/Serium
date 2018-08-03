module.exports = (client, message, nt) => {
  let user
  if (nt.parameters[0]) {
    if (nt.parameters[0].startsWith('<@')) {
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
