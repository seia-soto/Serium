module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    let user = await message.mentions.users.first()
    message.reply(user.avatarURL)
      .catch(error => message.reply(error))
  } else {
    message.reply(message.author.avatarURL)
  }
}
