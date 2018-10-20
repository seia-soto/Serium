module.exports = (client, message) => {
  const template = {
    verificationLevel: message.guild.verificationLevel,
    explicitContentFilter: message.guild.explicitContentFilter,
    mfaLevel: message.guild.mfaLevel,
    permissions: {
      messages: {
        read: message.guild.me.permissions.has('VIEW_CHANNEL'),
        write: message.guild.me.permissions.has('SEND_MESSAGES'),
        manage: message.guild.me.permissions.has('MANAGE_MESSAGES')
      },
      member: {
        role: message.guild.me.permissions.has('MANAGE_ROLES'),
        nickname: message.guild.me.permissions.has('MANAGE_NICKNAMES')
      },
      server: {
        kick: message.guild.me.permissions.has('KICK_MEMBERS'),
        ban: message.guild.me.permissions.has('BAN_MEMBERS'),
        invite: message.guild.me.permissions.has('CREATE_INSTANT_INVITE')
      }
    },
    owner: client.users.get(message.guild.ownerID)
  }
  return template
}
