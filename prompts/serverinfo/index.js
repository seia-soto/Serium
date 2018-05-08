const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const server = message.guild
  const embed = new Discord.RichEmbed()
    .setTitle(nt.translations.serverinfo.title.owned + client.users.get(server.ownerID).tag)
    .setAuthor(server.name, server.iconURL)
    .setColor(16761035)
    .setDescription(server.members.size + nt.translations.serverinfo.description.members + server.channels.size + nt.translations.serverinfo.description.channels + server.roles.size + nt.translations.serverinfo.description.roles)
    .setThumbnail(server.iconURL)
    .addField(nt.translations.serverinfo.users.title, nt.translations.serverinfo.users.count + server.memberCount + nt.translations.serverinfo.users.large + server.large, true)
    .addField(nt.translations.serverinfo.configures.title, nt.translations.serverinfo.configures.afkTimeout + server.afkTimeout + nt.translations.serverinfo.configures.afkChannel + `<#${server.afkChannelID}>` + nt.translations.serverinfo.configures.verificationLevel + server.verificationLevel + nt.translations.serverinfo.configures.explicitContentFilter + server.explicitContentFilter, true)
  message.channel.send({embed})
}
