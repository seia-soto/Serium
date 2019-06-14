const moment = require('moment')

const Prompt = (message, client) => {
  const filters = message._se.translates.filters
  const regionMap = message._se.translates.filters.regions

  moment.locale(message._se.translates._language)

  message.channel.send({
    embed: {
      title: message.guild.name,
      description:
        message._se.translates.channels.bind({
          channelSize: message.guild.channels.size,
          textChannelSize: message.guild.channels.filter(channel => channel.type === 'text').size,
          voiceChannelSize: message.guild.channels.filter(channel => channel.type === 'voice').size
        }) +
        message._se.translates.emojis.bind({
          emojiSize: message.guild.emojis.size,
          animatedEmojiSize: message.guild.emojis.filter(emoji => emoji.animated).size
        }) +
        message._se.translates.members.bind({
          userSize: message.guild.memberCount,
          botUserSize: message.guild.members.filter(member => member.user.bot).size,
          onlineUserSize: message.guild.members.filter(member => member.presence.status !== 'offline').size,
          playingUserSize: message.guild.members.filter(member => member.presence.game).size,
          webappUserSize: message.guild.members.filter(member => (member.presence.clientStatus) ? member.presence.clientStatus.web : false).size,
          mobileUserSize: message.guild.members.filter(member => (member.presence.clientStatus) ? member.presence.clientStatus.mobile : false).size,
          desktopUserSize: message.guild.members.filter(member => (member.presence.clientStatus) ? member.presence.clientStatus.desktop : false).size
        }) +
        message._se.translates.roles.bind({
          roleSize: message.guild.roles.size
        }),
      fields: [
        {
          name: message._se.translates.afkChannel,
          value: (message.guild.afkChannel) ? message._se.translates.afkChannelName.bind({afkChannel: message.guild.afkChannel.name}) : message._se.translates.afkChannelNotfound,
          inline: true
        },
        {
          name: message._se.translates.afkTimeout,
          value: message._se.translates.afkTimeoutStatus.bind({time: message.guild.afkTimeout}),
          inline: true
        },
        {
          name: message._se.translates.serverAbility,
          value: (message.guild.available) ? message._se.translates.serverAbilityAvailable : message._se.translates.serverAbilityUnavailable,
          inline: true
        },
        {
          name: message._se.translates.owner,
          value: `<@${message.guild.ownerID}>`,
          inline: true
        },
        {
          name: message._se.translates.identify,
          value: message.guild.id,
          inline: true
        },
        {
          name: message._se.translates.region,
          value: regionMap[message.guild.region],
          inline: true
        },
        {
          name: message._se.translates.createdAt,
          value: moment(message.guild.createdTimestamp).format(message._se.translates.createAtFormat),
          inline: true
        },
        {
          name: message._se.translates.defaultMessageNotifications,
          value: (message.guild.defaultMessageNotifications === 'ALL') ? message._se.translates.defaultMessageNotificationsForAllMessages : message._se.translates.defaultMessageNotificationsOnlyMention,
          inline: true
        },
        {
          name: message._se.translates.explicitContentFilter,
          value: filters.explicitContentFilter[message.guild.explicitContentFilter],
          inline: true
        },
        {
          name: message._se.translates.verificationLevel,
          value: filters.verificationLevel[message.guild.verificationLevel],
          inline: true
        },
        {
          name: message._se.translates.mfaLevel,
          value: filters.mfaLevel[message.guild.mfaLevel],
          inline: true
        }
      ],
      thumbnail: {
        url: message.guild.iconURL
      }
    }
  })
}
const Properties = {
  name: 'serverinfo',
  usage: 'serverinfo',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
