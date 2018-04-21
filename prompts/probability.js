const Request = require(`request`)
module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  if (!presets.arguments[0]) return
  message.reply(`The probability that ${presets.arguments.slice(0).join(' ')} is ${Math.floor(Math.random() * 100) + 1}%.`)
}
