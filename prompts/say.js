let options = {
  permissions: 0
}
exports.options = options

exports.execute = async (client, message, presets) => {
  message.reply(`${presets.arguments.slice(0).join(' ')}`)
}
