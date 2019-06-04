const EndPreferenceIndicator = require('@structures/EndPreferenceIndicator')

const Prompt = (message, client) => {
  EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
    const toEnable = message._se.data[0]
    if (!toEnable || typeof preference[toEnable] === 'undefined') return message.reply('정확히 뭘 활성화해야 하는지 모르겠어요!')

    preference[toEnable] = true

    EndPreferenceIndicator.setGuildSettings(message.guild.id, preference)
      .then(() => message.reply(`${toEnable} 항목을 활성화했어요!`))
      .catch(error => {
        console.error(error)

        message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
      })
  }).catch(error => {
    console.error(error)

    message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
  })
}
const Properties = {
  name: 'enable',
  description: '서버 구성설정에서 원하는 것을 활성화합니다.',
  usage: 'enable <원하는 것>',

  requiredPermission: 'staff'
}

module.exports = Prompt
module.exports.properties = Properties
