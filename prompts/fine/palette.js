const Plan = (message, client) => {
  const color = message._se.data[0].toLowerCase()

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
    message.reply('Sewritten 사무국입니다, 닉네임에 색칠해봤어요...')
  } else {
    message.reply('Sewritten 사무국입니다, 올바른 Hex 코드가 아니예요.')
  }
}
const Properties = {
  name: 'palette',
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
