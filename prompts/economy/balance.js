const structures = require('@structures')
const utils = require('@utils')

const {PreferenceIndicator, EndPreferenceIndicator} = structures
const {findUser} = utils

const Prompt = (message, client) => {
  let identify = message.author.id

  if (message._se.data[0]) {
    const mention = message.mentions.members.first()

    if (mention) {
      identify = mention.user.id
    } else {
      const user = findUser(message.guild.members, message._se.data.join(' '))

      if (user) {
        identify = user.id
      } else {
        return message.reply('은행에서는 없는 사람 가지고 사기치는거 아니예요.')
      }
    }
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
