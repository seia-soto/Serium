const prompts = require('../prompts')
const PreferenceIndicator = require('./PreferenceIndicator')

const CheckPermissionValid = (toVerify, permission) => {
  const promptPermission = prompts[toVerify].requiredPermission

  if ((permission & promptPermission) === promptPermission) {
    return true
  } else {
    return false
  }
}
const PermissionParser = message => {
  const staffRole = message.guild.roles.find(value => value.id === PreferenceIndicator.App.Permissions.Administrations)

  const basicPermission = 0x0
  const staffPermission = 0x1

  let authorPermission = basicPermission

  if (message.member.roles.has(staffRole)) {
    authorPermission = authorPermission | staffPermission
  }

  return authorPermission
}

module.exports = PermissionParser
module.exports.isValidFor = CheckPermissionValid
