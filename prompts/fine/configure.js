const structures = require('../../structures')

let defaultEmbed = {
  embed: {
    title: '',
    description: '현재 서버에 대한 구성 설정이예요!',
    fields: [
      {
        name: '명령 확장',
        value: ''
      },
      {
        name: '이벤트 확장',
        value: ''
      }
    ]
  }
}

const Plan = (message, client) => {
  structures.EndPreferenceIndicator(message.guild.id).then(preference => {
    // NOTE: Initialize embed object.
    defaultEmbed.embed.title = `${message.guild.name} 구성설정`
    defaultEmbed.embed.fields.forEach(field => field.value = '')

    Object.entries(preference.prompts).forEach(entry => defaultEmbed.embed.fields[0].value += `**${entry[0]}** ${(entry[1]) ? '활성화됨' : '비활성화됨'}\n`)

    defaultEmbed.embed.fields[1].value += `**새 멤버에 대한 캡챠** ${(preference.events.guildMemberAdd.verifyCaptcha) ? '활성화됨' : '비활성화됨'}`

    message.channel.send(defaultEmbed)
  }).catch(error => {
    console.error(error)

    message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
  })
}
const Properties = {
  name: 'configure',
  requiredPermission: 'staff'
}

module.exports = Plan
module.exports.properties = Properties
