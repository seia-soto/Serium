const Prompt = (message, client) => {
  message.reply(`다시...! ${Math.round(client.ping)}ms가 소요되었어요!`)
}
const Properties = {
  name: 'ping',
  description: 'Get average ping-pong time to Discord API server.',
  usage: 'ping',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
