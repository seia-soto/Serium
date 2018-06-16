const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const server = message.guild
  const embed = new Discord.RichEmbed()
    .setTitle(nt.i('serverOwner').replace('{name}', client.users.get(server.ownerID).tag))
    .setAuthor(server.name, server.iconURL)
    .setColor(16761035)
    .setDescription(nt.i('serverSources').replace('{users}', server.memberCount)
      .replace('{channels}', server.channels.size)
      .replace('{roles}', server.roles.size)
      .replace('{emojis}', server.emojis.size))
    .setThumbnail(server.iconURL)
    .addField(nt.i('size', true),
    '**' + nt.i('user', true) + '** ' + server.memberCount +
    '\n**' + nt.i('isHuge') + '** ' + server.large, true)
    .addField(nt.i('level'),
    '**' + nt.i('afktimeout') + '** ' + server.afkTimeout +
    '\n**' + nt.i('verificationlevel', true) + '** ' + server.verificationLevel +
    '\n**' + nt.i('explicitcontentfilter', true) + '** ' + server.explicitContentFilter, true)
    .addField(nt.i('configurations'),
    '**' + nt.i('location', true) + '** ' + server.region +
    '\n**' + nt.i('afkchannel') + '** ' + `<#${server.afkChannelID}>`, true)
  message.channel.send({embed})
}
