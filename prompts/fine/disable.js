const EndPreferenceIndicator = require('@structures/EndPreferenceIndicator')

const Prompt = (message, client) => {
  EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
    const toDisable = message._se.data[0]
    if (!toDisable || typeof preference[toDisable] === 'undefined') return message.reply('정확히 뭘 비활성화해야 하는지 모르겠어요!')

    preference[toDisable] = false

    EndPreferenceIndicator.setGuildSettings(message.guild.id, preference)
      .then(() => message.reply(`${toDisable} 항목을 비활성화했어요!`))
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
  name: 'disable',
  description: 'Disable some function in server preferences.',
  usage: 'disable <preference>',

  requiredPermission: 'staff'
}

module.exports = Prompt
module.exports.properties = Properties
