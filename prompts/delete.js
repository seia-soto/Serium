let options = {
  permissions: 1,
  interprete: [`delete`, `삭제`]
}
exports.options = options

exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    message.delete()
    if (isNaN(presets.arguments[0]) === true || presets.arguments[0] > 45) return
    message.channel.bulkDelete(presets.arguments[0])
      .then(messages => message.reply(`Bulk deleted ${messages.size} messages.`))
  } else {
    return
  }
}
