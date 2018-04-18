let options = {
  permissions: 0
}
exports.options = options

exports.execute = async (client, message, presets) => {
  message.reply(`${new Date() - message.createdTimestamp}ms`)
}
