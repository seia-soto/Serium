module.exports.permissions = 3
module.exports.execute = (client, message, nt) => {
  let guilds = 'Sending notification to each server..'
  message.channel.send(guilds)
    .then(condition => {
      client.guilds.forEach(guild => {
        client.users.get(guild.ownerID).send(nt.arguments.slice(0).join(' '))
        guilds = guild.name + '\n'
      })
      guilds = guilds + '\nSent notification to ' + client.guilds.size + ' guilds.'
      condition.edit(guilds)
    })
}
