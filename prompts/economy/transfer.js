const structures = require('@structures')

const {PreferenceIndicator, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  const mention = message.mentions.members.first()

  if (mention) {
    if (!message._se.data[1] || isNaN(message._se.data[1])) return message.reply('얼마를 보내야 할 지 알려주세요!')

    message.reply('처리 중입니다... 잠시만 기다려주세요.').then(transferingMessage => {
      try {
        EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
          if (message._se.data[1] > preference.economy.shards) return transferingMessage.edit('현재 가지고 계신 잔액보다 더 큰 금액을 보낼 수는 없어요!')

          preference.economy.shards -= message._se.data[1]

          EndPreferenceIndicator.setUserSettings(message.author.id, preference).then(() => {
            EndPreferenceIndicator.getUserSettings(mention.user.id).then(recieverPreference => {
              recieverPreference.economy.shards += Number(message._se.data[1])

              EndPreferenceIndicator.setUserSettings(mention.user.id, recieverPreference).then(() => {
                transferingMessage.edit(`성공적으로 ${mention.user.username}님에게 ${message._se.data[1]} ${PreferenceIndicator.Ecosystem.Economy.unit}만큼 송금했어요!`)
              })
            })
          })
        })
      } catch (error) {
        console.error(error)

        transferingMessage.edit('처리 중에 문제가 발생했습니다, 다시시도해주세요.')
      }
    })
  } else {
    return message.reply('어디로 보내야 하는지 모르겠는걸요?! 제 선물인거 다 알고 있어요... ;-;')
  }
}
const Properties = {
  name: 'transfer',
  description: '개인 계좌의 잔액을 가져옵니다.',
  usage: 'transfer [누군가] [금액]',

  alias: ['give'],
  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
