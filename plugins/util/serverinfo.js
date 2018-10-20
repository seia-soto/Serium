const Discord = require('discord.js')

module.exports = (client, message, data, translate) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor(data.application.embed.color)
    .setThumbnail(message.guild.iconURL)

    .addField('ID', message.guild.id, true)
    .addField(translate.serverinfo.region, message.guild.region, true)
    .addField(translate.serverinfo.count.title, message.guild.memberCount + translate.serverinfo.count.units[0] +
    ' / ' + message.guild.channels.size + translate.serverinfo.count.units[1] +
    ' / ' + message.guild.roles.size + translate.serverinfo.count.units[2] +
    ' / ' + message.guild.emojis.size + translate.serverinfo.count.units[3], true)
    .addField(translate.serverinfo.owner, `<@${data.guild.owner.id}> (${data.guild.owner.id})`, true)

    .addField(translate.serverinfo.verificationLevel, translate.serverinfo.filter.verificationLevel[data.guild.verificationLevel], true)
    .addField(translate.serverinfo.mfaLevel, translate.serverinfo.filter.mfaLevel[data.guild.mfaLevel], true)
    .addField(translate.serverinfo.explicitContentFilter, translate.serverinfo.filter.explicitContentFilter[data.guild.explicitContentFilter], true)
    .addField(translate.serverinfo.defaultMessageNotifications, translate.serverinfo.filter.defaultMessageNotifications[message.guild.defaultMessageNotifications], true)
    .addField(translate.serverinfo.afkChannel, `<#${message.guild.afkChannelID}>`, true)
    .addField(translate.serverinfo.afkTimeout, message.guild.afkTimeout + translate.serverinfo.second, true)
  message.channel.send({embed})
}
