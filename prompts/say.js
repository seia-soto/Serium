module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  message.reply(presets.arguments.slice(0).join(` `))
}
