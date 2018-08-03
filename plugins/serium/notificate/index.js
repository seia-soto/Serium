module.exports = (client, message, nt) => {
  let guilds = 'Sending notification to each server..'
  message.channel.send(guilds)
    .then(condition => {
      client.guilds.forEach(guild => {
        client.users.get(guild.ownerID).send(nt.parameters.slice(0).join(' '))
        guilds = guilds + '\n' + guild.name
      })
      guilds = guilds + '\nSent notification to ' + client.guilds.size + ' guilds.'
      condition.edit(guilds)
    })
}
