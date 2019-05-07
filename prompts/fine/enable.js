const structures = require('@structures')

const {CheckRequirement, EndPreferenceIndicator, CaseSensitive} = structures

const Plan = (message, client) => {
  EndPreferenceIndicator(message.guild.id).then(preference => {
    const toEnable = message._se.data[0]
    if (!toEnable || typeof preference[toEnable] === undefined) return message.reply('정확히 뭘 활성화해야 하는지 모르겠어요!')

    const test = CheckRequirement.for[toEnable](message.guild)
    if (test.signal) {
      preference[toEnable] = true

      EndPreferenceIndicator.save(message.guild.id, preference)
        .then(() => message.reply(`${toEnable} 항목을 활성화했어요!`))
        .catch(error => {
          console.error(error)

          message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
        })
    } else {
      message.reply(`${test.message}, 아직 이 기능을 활성화할 수 없어요.`)
    }
  }).catch(error => {
    console.error(error)

    message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
  })
}
const Properties = {
  name: 'enable',
  requiredPermission: 'staff'
}

module.exports = Plan
module.exports.properties = Properties
