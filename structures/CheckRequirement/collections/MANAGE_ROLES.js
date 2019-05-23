const exceptionMessages = [
  '제가 역할을 관리하기에 충분한 권한이 없는 것 같아요!'
]
const RequirementChecker = guild => {
  const evaluations = [
    (guild.me.hasPermission('MANAGE_ROLES'))
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
