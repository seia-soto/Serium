const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const server = message.guild
  const translate = nt.i('serverinfo')
  const embed = new Discord.RichEmbed()
    .setTitle(translate.whoOwned + ' ' + client.users.get(server.ownerID).tag)
    .setAuthor(server.name, server.iconURL)
    .setColor(16761035)
    .setDescription(server.members.size + ' ' + nt.i('users') + ' ' +
    server.channels.size + ' ' + nt.i('channels') + ' ' +
    server.roles.size + ' ' + nt.i('roles') + ' ' +
    server.emojis.size + ' ' + nt.i('emojis') + ' ' +
    translate.availableFor)
    .setThumbnail(server.iconURL)
    .addField(nt.i('size'),
    '**' + nt.i('users') + '** ' + server.memberCount +
    '\n**' + nt.i('isHuge') + '** ' + server.large, true)
    .addField(nt.i('level'),
    '**' + nt.i('afkTimeout') + '** ' + server.afkTimeout +
    '\n**' + nt.i('verificationLevel') + '** ' + server.verificationLevel +
    '\n**' + nt.i('ExplicitContentFilter') + '** ' + server.explicitContentFilter, true)
    .addField(nt.i('configurations'),
    '**' + nt.i('location') + '** ' + server.region +
    '\n**' + nt.i('afkChannel') + '** ' + `<#${server.afkChannelID}>`, true)
  message.channel.send({embed})
}
