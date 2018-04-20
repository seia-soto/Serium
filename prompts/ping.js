module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  message.reply(`${new Date() - message.createdTimestamp}ms`)
}
