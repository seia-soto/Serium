const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const server = message.guild
  const translate = nt.i('serverinfo', nt.language)
  const embed = new Discord.RichEmbed()
    .setTitle(translate.whoOwned + ' ' + client.users.get(server.ownerID).tag)
    .setAuthor(server.name, server.iconURL)
    .setColor(16761035)
    .setDescription(server.members.size + ' ' + nt.i('users', nt.language) + ' ' +
    server.channels.size + ' ' + nt.i('channels', nt.language) + ' ' +
    server.roles.size + ' ' + nt.i('roles', nt.language) + ' ' +
    translate.availableFor)
    .setThumbnail(server.iconURL)
    .addField(nt.i('size', nt.language),
    '**' + nt.i('users', nt.language) + '** ' + server.memberCount +
    '\n**' + nt.i('isHuge', nt.language) + '** ' + server.large, true)
    .addField(nt.i('level', nt.language),
    '**' + nt.i('afkTimeout', nt.language) + '** ' + server.afkTimeout +
    '\n**' + nt.i('afkChannel', nt.language) + '** ' + `<#${server.afkChannelID}>` +
    '\n**' + nt.i('verificationLevel', nt.language) + '** ' + server.verificationLevel +
    '\n**' + nt.i('explicitContentFilter', nt.language) + '** ' + server.explicitContentFilter, true)
  message.channel.send({embed})
}
