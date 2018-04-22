const Request = require(`request`)
module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  if (!presets.arguments[0]) return
  message.channel.send(presets.language.probability.result.replace(`%a`, presets.arguments.slice(0).join(' ')).replace(`%b`, Math.floor(Math.random() * 100) + 1))
}
