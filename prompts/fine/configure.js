const structures = require('@structures')

const {CaseSensitive, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  EndPreferenceIndicator(message.guild.id).then(preference => {
    // NOTE: View of current per server preference.
    let embed = {
      embed: {
        title: message.guild.name,
        description: '현재 서버에 대한 구성 설정이예요! `se <enable|disable> [prefName]`와 같이 세부 구성을 수정할 수 있습니다.',
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

    const preferenceEntries = Object.entries(preference)
    // NOTE: Example output; typeof _Array~ [[preferenceName, value], ...*[ <preferences> ]]

    preferenceEntries.forEach(preferenceEntry => {
      // NOTE: 0 means extended as command.
      const preferenceExtendedType = (preferenceEntry[0].startsWith('prompt.')) ? 0 : 1

      embed.embed.fields[preferenceExtendedType].value += `**${EndPreferenceIndicator.namespaces[preferenceEntry[0]]}(${preferenceEntry[0]})** ${CaseSensitive(preferenceEntry[1])}\n`
    })
    message.channel.send(embed)
  }).catch(error => {
    console.error(error)

    message.reply('앗... 잠시 서비스에 연결할 수가 없었어요, 나중에 다시시도해주시겠어요?')
  })
}
const Properties = {
  name: 'configure',
  description: 'Show current server perfereces status.',
  usage: 'configure',

  requiredPermission: 'staff'
}

module.exports = Prompt
module.exports.properties = Properties
