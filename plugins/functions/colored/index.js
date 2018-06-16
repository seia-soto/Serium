module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const ionicRole = message.guild.roles.find('name', 'Ionics')
  const notAllowedEnviroments =
    (!ionicRole)
    || (!message.guild.members.get(client.user.id).permissions.has('MANAGE_ROLES'))
  const notAllowedCodes =
    (!nt.arguments[0].match('#'))
    || (nt.arguments[0].length > 8)
  if (notAllowedEnviroments) {
    message.reply(nt.i('requirementsInvalidToColored'))
  } else {
    if (notAllowedCodes) {
      message.reply(nt.i('invalidParameter'))
      return
    }
    const issuedRole = message.guild.roles.find('name', 'Color' + nt.arguments[0])
    if (issuedRole === null || !issuedRole) {
      message.guild.createRole({
        name: 'Color' + nt.arguments[0],
        color: nt.arguments[0].replace('#', ''),
        hoisted: false,
        position: ionicRole.position - 1,
        permissions: 0,
        mentionable: false
      }).then(role => {
        message.guild.members.get(message.author.id).addRole(role.id)
      }).catch(error => {
        message.reply(error)
        return
      })
    } else {
      message.guild.members.get(message.author.id).addRole(issuedRole.id)
    }
    message.reply(nt.i('getColored'))
  }
}
