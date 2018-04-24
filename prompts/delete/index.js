module.exports.permissions = 1
module.exports.execute = (client, message, nt) => {
  if (presets.arguments[0]) {
    message.delete()
    if (isNaN(presets.arguments[0]) === true || presets.arguments[0] > 45) return
    message.channel.bulkDelete(presets.arguments[0])
      .then(messages => message.reply())
        .then(message => delete(4500))
  } else {
    message.reply('Invaild parameter')
  }
}
