module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let avatar
  if (nt.arguments[0]) {
    let user = message.mentions.users.first()
    avatar = user.avatarURL
  } else {
    avatar = message.author.avatarURL
  }
  if (avatar) {
    message.reply(avatar)
  } else {
    message.reply(nt.i('defaultAvatar'))
  }
}
