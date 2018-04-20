module.exports.options = {
  permissions: 1
}

module.exports.execute = async (client, message, presets) => {
  message.delete()
  message.channel.send(presets.arguments.slice(0).join(` `))
}
