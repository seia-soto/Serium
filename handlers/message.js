const structures = require('../structures')

module.exports = (client, message) => {
  const permissions = structures.user.permissions.accumulate(message.member)
  // const settings = structures.user.settings.get(message.member)

  console.log([
    permissions
  ])
}
