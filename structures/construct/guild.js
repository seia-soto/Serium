module.exports = (client, message) => {
  if (!message.guild) return

  const template = {
    verificationLevel: message.guild.verificationLevel,
    explicitContentFilter: message.guild.explicitContentFilter,
    mfaLevel: message.guild.mfaLevel,
    permissions: {
      messages: {
        read: message.channel.permissionsFor(message.guild.me).has('VIEW_CHANNEL'),
        write: message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS'),
        manage: message.channel.permissionsFor(message.guild.me).has('MANAGE_MESSAGES')
      },
      member: {
        role: message.channel.permissionsFor(message.guild.me).has('MANAGE_ROLES'),
        nickname: message.channel.permissionsFor(message.guild.me).has('MANAGE_NICKNAMES')
      },
      server: {
        kick: message.channel.permissionsFor(message.guild.me).has('KICK_MEMBERS'),
        ban: message.channel.permissionsFor(message.guild.me).has('BAN_MEMBERS'),
        invite: message.channel.permissionsFor(message.guild.me).has('CREATE_INSTANT_INVITE')
      }
    },
    owner: client.users.get(message.guild.ownerID)
  }
  return template
}
