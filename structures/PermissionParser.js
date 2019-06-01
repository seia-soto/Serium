const PreferenceIndicator = require('./PreferenceIndicator')

const CheckPermissionValid = (toVerify, permission) => {
  const requiredPermission = PreferenceIndicator.App.Externals.PermissionIdentities[toVerify]

  if ((permission & requiredPermission) === requiredPermission) {
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
