const structures = require('../structures')

const {PreferenceIndicator} = structures

const OnGuildMemberAdd = (member, client) => {
  // NOTE: Welcome trigger.
  PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole.forEach(StartingRole => {
    const roleToAdd = member.guild.roles.find(values => values.name === StartingRole)

    member.addRole(roleToAdd)
      .catch(error => console.error)
  })
}

module.exports = OnGuildMemberAdd
