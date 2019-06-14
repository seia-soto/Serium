const Prompt = (message, client) => {
  message.reply(message._se.translates.currentLatency.bind({latency: Math.round(client.ping)}))
}
const Properties = {
  name: 'ping',
  usage: 'ping',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
