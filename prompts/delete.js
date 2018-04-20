module.exports.options = {
  permissions: 1
}

module.exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    message.delete()
    if (isNaN(presets.arguments[0]) === true || presets.arguments[0] > 45) return
    message.channel.bulkDelete(presets.arguments[0])
      .then(messages => message.reply(`Bulk deleted ${messages.size} messages.`))
  } else {
    return
  }
}
