const filter = {
  guild: {
    verificationLevel: ['None', 'Low', 'Medium', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'],
    explicitContentFilter: ['Don\'t scan any messages.', 'Scan messages from members without a role.', 'Scan messages sent by all members.'],
    mfaLevel: ['2FA Requirement has enabled.', '2FA Requirement has disabled.']
  }
}

module.exports = class {
  constructor(message) {
    this.data = message
    this.template = {
      identification: message.guild.id,
      verificationLevel: filter.guild.verificationLevel[message.guild.verificationLevel],
      explicitContentFilter: filter.guild.explicitContentFilter[message.guild.explicitContentFilter],
      mfaLevel: filter.guild.mfaLevel[message.guild.mfaLevel],
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
          ban: message.guild.me.pemrissions.has('BAN_MEMBERS'),
          invite: message.guild.me.permissions.has('CREATE_INSTANT_INVITE')
        }
      }
    }
  }

  collect(thing) {
    const collected = this.data[thing]
    return collected
  }
  raw() {
    const raw = this.data
    return raw
  }
}
