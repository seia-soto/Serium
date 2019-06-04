const Prompt = (message, client) => {
  const test = (message.guild.me.hasPermission('MANAGE_ROLES'))
  const color = (message._se.data[0] || '').toLowerCase()

  if (!test) {
    return message.reply('현재 서버에서 역할을 관리할 권한이 없습니다.')
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
    message.reply('Sewritten 사무국입니다, 닉네임에 색칠해봤어요...')
  } else {
    message.reply('Sewritten 사무국입니다, 올바른 Hex 코드가 아니예요.')
  }
}
const Properties = {
  name: 'palette',
  description: '앱이 자동으로 서버에 역할을 생성하여 사용자의 닉네임에 색을 칠해줍니다.',
  usage: 'palette #<HEX 색코드>',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
