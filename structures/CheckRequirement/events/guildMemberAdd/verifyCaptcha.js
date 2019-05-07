const PreferenceIndicator = require('@structures/PreferenceIndicator')

const exceptionMessages = [
  '제가 역할을 관리하기에 충분한 권한이 없는 것 같아요!',
  `새 멤버를 위한 \`${PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole}\` 역할을 찾지 못했어요, 역할이 존재하는지 다시 한 번 확인해주세요!`
]
const RequirementChecker = guild => {
  const evaluations = [
    (guild.me.hasPermission('MANAGE_ROLES')),
    (guild.roles.find(values => values.name === PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole)) ? true : false
  ]

  let result = {
    signal: true,
    message: null
  }

  if (evaluations.includes(false)) {
    result.signal = false
    result.message = exceptionMessages[evaluations.indexOf(false)]
  }
  return result
}

module.exports = RequirementChecker
