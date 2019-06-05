const moment = require('moment')
const structures = require('@structures')

const {DateFormer, PreferenceIndicator, EndPreferenceIndicator} = structures

moment.locale('ko')

const Prompt = (message, client) => {
  EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
    const current = new Date()
    const lastConfirm = new Date(preference.economy.lastConfirm)

    if (moment(current).isAfter(moment(lastConfirm).add(1, 'days'))) {
      preference.economy.lastConfirm = new Date()
      preference.economy.shards += PreferenceIndicator.Ecosystem.Economy.dailyWages

      EndPreferenceIndicator.setUserSettings(message.author.id, preference).then(() => {
        message.reply(`${PreferenceIndicator.Ecosystem.Economy.dailyWages} ${PreferenceIndicator.Ecosystem.Economy.unit}만큼 계좌에 추가했어요!`)
      }).catch(error => {
        console.error(error)

        message.reply('어라... 서비스 연결에 문제가 있었나 봐요.')
      })
    } else {
      message.reply(`이미 오늘은 받았잖아요! ${moment(lastConfirm).add(1, 'days').fromNow()}에 다시 사용가능해요.`)
    }
  }).catch(error => {
    console.error(error)

    message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
  })
}
const Properties = {
  name: 'daily',
  description: '하루에 한 번 용돈을 줄거예요, 아껴쓰도록 하세요.',
  usage: 'daily',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
