const properties = require('../../scopes/properties')

module.exports = message => {
  const special = [
    //'324541397988409355' // NOTE: Seia#0002
  ]
  let permission = properties.application.permissions.common

  if (message.member.permissions.has('MANAGE_GUILD')) permission = (permission | properties.application.permissions.moderate)
  if (message.author.id in special) permission = (permission | properties.application.permissions.administrate)

  return permission
}
