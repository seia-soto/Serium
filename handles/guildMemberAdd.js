const structures = require('../structures')

const {PreferenceIndicator, TriggerWelcome} = structures

const OnGuildMemberAdd = (member, client) => {
  PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole.forEach(StartingRole => {
    const roleToAdd = member.guild.roles.find(values => values.name === StartingRole)

    member.addRole(roleToAdd)
      .catch(error => console.error)
  })
}

module.exports = OnGuildMemberAdd
