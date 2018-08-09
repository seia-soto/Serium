module.exports = (client, message, nt) => {
  const colorsRole = message.guild.roles.find('name', 'Colors')
  const notAllowedEnviroments =
    (!colorsRole)
    || (!message.guild.members.get(client.user.id).permissions.has('MANAGE_ROLES'))
  const notAllowedCodes =
    (!nt.parameters[0])
    || (!nt.parameters[0].match('#'))
    || (nt.parameters[0].length > 8)
  if (notAllowedEnviroments) {
    message.reply(nt.i('requirementsInvalidToColored'))
  } else {
    if (notAllowedCodes) {
      message.reply(nt.i('invalidParameter'))
      return
    }
    const issuedRole = message.guild.roles.find(items => items.name === 'Color' + nt.parameters[0])
    if (issuedRole === null || !issuedRole) {
      message.guild.createRole({
        name: 'Color' + nt.parameters[0].toLowerCase(),
        color: nt.parameters[0].replace('#', '').toLowerCase(),
        hoisted: false,
        position: colorsRole.position - 1,
        permissions: 0,
        mentionable: false
      }).then(role => {
        message.guild.members.get(message.author.id).addRole(role.id)
      }).catch(error => {
        message.reply(error)
        return
      })
    } else {
      message.guild.members.get(message.author.id)._roles.forEach(role => {
        if (message.guild.roles.get(role).name.startsWith('Color#')) {
          message.guild.members.get(message.author.id).removeRole(role)
        }
      })
      message.guild.members.get(message.author.id).addRole(issuedRole.id)
    }
    message.reply(nt.i('getColored'))
  }
}
