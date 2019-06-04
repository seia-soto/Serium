const Prompt = (message, client) => {
  message.reply(`다시...! ${Math.round(client.ping)}ms가 소요되었어요!`)
}
const Properties = {
  name: 'ping',
  description: 'Discord API 서버와의 평균 지연시간을 가져옵니다.',
  usage: 'ping',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
