const config = require('../../config')

module.exports = member => {
  let memberLevel = 0x0

  config.permissions.forEach(level => {
    const rules =
      (!level.required.identify.length || level.required.identify.includes(member.id)) &&
      (!level.required.roles.length || member.roles.every(role => level.required.roles.includes(role.name))) &&
      (!level.required.permissions.length || member.permissions.toArray().every(permission => level.required.permissions.includes(permission)))
    if (rules) {
      memberLevel = memberLevel | level.flag
    }
  })

  return memberLevel
}
