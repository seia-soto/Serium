const prompts = require('./PromptIndicator')
const PreferenceIndicator = require('./PreferenceIndicator')

const CheckPermissionValid = (toVerify, permission) => {
  const promptPermission = PreferenceIndicator.App.Externals.PermissionIdentities[prompts[toVerify].properties.requiredPermission]

  if ((permission & promptPermission) === promptPermission) {
    return true
  } else {
    return false
  }
}
const PermissionParser = message => {
  const staffRole = message.guild.roles.find(value => value.name === PreferenceIndicator.App.Permissions.Administrations)

  let authorPermission = PreferenceIndicator.App.Externals.PermissionIdentities.public

  if (message.member.hasPermission('ADMINISTRATOR')) {
    authorPermission = authorPermission | PreferenceIndicator.App.Externals.PermissionIdentities.staff
  }
  if (message.author.id === PreferenceIndicator.App.Permissions.Superuser) {
    authorPermission = authorPermission | PreferenceIndicator.App.Externals.PermissionIdentities.suser
  }

  return authorPermission
}

module.exports = PermissionParser
module.exports.isValidFor = CheckPermissionValid
