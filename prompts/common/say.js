const Prompt = (message, client) => {
  message.channel.send(message._se.data.join(' ') || message._se.translates.stringMissing)
}
const Properties = {
  name: 'say',
  usage: 'say [something]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
