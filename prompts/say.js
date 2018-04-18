let options = {
  permissions: 0,
  interprete: [`say`]
}
exports.options = options

exports.execute = async (client, message, presets) => {
  message.reply(`${presets.arguments.slice(0).join(' ')}`)
}
