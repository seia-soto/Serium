const Plan = (message, client) => {
  message.reply(`다시...! ${Math.round(client.ping)}ms가 소요되었어요!`)
}
const Properties = {
  name: 'ping',
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
