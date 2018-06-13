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
    let issuedRole = message.guild.roles.find('name', 'Color' + nt.arguments[0])
    if (!issuedRole) {
      message.guild.createRole({
        name: 'Color' + nt.arguments[0],
        color: nt.arguments[0].replace('#', ''),
        hoisted: true,
        position: ionicRole.position - 1,
        permissions: 0,
        mentionable: true
      }).then(role => {
        issuedRole = role
      }).catch(error => {
        message.reply(error)
        return
      })
    }
    message.guild.members.get(message.author.id).addRole(ionicRole.id)
    message.guild.members.get(message.author.id).addRole(issuedRole.id)
    message.reply(nt.i('getColored'))
  }
}
