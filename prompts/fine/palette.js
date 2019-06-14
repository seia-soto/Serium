const Prompt = (message, client) => {
  const test = (message.guild.me.hasPermission('MANAGE_ROLES'))
  const color = (message._se.data[0] || '').toLowerCase()

  if (!test) {
    return message.reply(message._se.translates.permissionMissing)
  }

  if (/#[a-f0-9]{3,6}/.test(color)) {
    const coloredRole = message.guild.roles.find(values => values.name === color)
    const coloredRolesMemberHas = message.member.roles.filter(values => values.name.startsWith('#'))

    coloredRolesMemberHas.forEach(role => message.member.removeRole(role.id))

    if (coloredRole !== null) {
      message.member.addRole(coloredRole.id)
    } else {
      message.guild.createRole({
        name: color,
        color: color,
        hoist: false,
        mentionable: false,
        position: 1
      }).then(role => {
        message.member.addRole(role)
      })
    }
    message.reply(message._se.translates.colorAccepted)
  } else {
    message.reply(message._se.translates.invalidColor)
  }
}
const Properties = {
  name: 'palette',
  usage: 'palette #<HEX Color>',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
