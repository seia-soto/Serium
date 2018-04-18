let options = {
  permissions: 1,
  interprete: [`sayd`]
}
exports.options = options

exports.execute = async (client, message, presets) => {
  message.delete()
  message.channel.send(`${presets.arguments.slice(0).join(' ')}`)
}
