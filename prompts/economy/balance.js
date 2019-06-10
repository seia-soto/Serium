const structures = require('@structures')

const {PreferenceIndicator, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  let identify = message.author.id

  const mention = message.mentions.members.first()
  if (mention) {
    identify = mention.user.id
  }

  EndPreferenceIndicator.getUserSettings(identify).then(preference => {
    message.reply(`${client.users.get(identify).username}님은 **${preference.economy.shards} ${PreferenceIndicator.Ecosystem.Economy.unit}**만큼 소유하고 있어요!`)
  }).catch(error => {
    console.error(error)

    message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
  })
}
const Properties = {
  name: 'balance',
  description: '개인 계좌의 잔액을 가져옵니다.',
  usage: 'balance [누군가]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
