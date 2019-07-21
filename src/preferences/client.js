module.exports = {
  token: 'TOKEN',
  admin: ['USER_ID'],

  // NOTE: Defaults;
  defaults: {
    prefix: 'se ',
    language: 'en',
    features: [
      // NOTE: Selectable features enabled defaultly.
    ]
  },

  // NOTE: Cooldown;
  cooldown: {
    enabled: true,
    timeout: 1000 * 2
  },

  // NOTE: Shards;
  sharding: true, // NOTE: Set this as false to disable sharding feature.
  shardingDelay: 7500, // NOTE: Delay of shard creation including update process. (default: 7500)
  shards: {
    totalShards: 1, // NOTE: If you set this as failble value, application will automattically create processes from CPU counts.
    token: null, // NOTE: Let this value as empty, application will automattically fill this from above.
    respawn: true // NOTE: Respawn shards automattically on exit signal.
  },

  // NOTE: Options;
  options: {
    apiRequestMethod: 'sequential',
    messageCacheMaxSize: 8,
    messageCacheLifetime: 16,
    messageSweepInterval: 2,
    fetchAllMembers: false,
    disableEveryone: true,
    restWsBridgeTimeout: 4000,
    restTimeOffset: 2000,
    retryLimit: 4,
    disabledEvents: [
      // NOTE: 	Array<WSEventType>	; https://discord.js.org/#/docs/main/stable/typedef/WSEventType
      'GUILD_SYNC',
      'GUILD_UPDATE',
      'GUILD_ROLE_CREATE',
      'GUILD_ROLE_DELETE',
      'GUILD_ROLE_UPDATE',
      'GUILD_BAN_ADD',
      'GUILD_BAN_REMOVE',
      'CHANNEL_CREATE',
      'CHANNEL_DELETE',
      'CHANNEL_UPDATE',
      'CHANNEL_PINS_UPDATE',
      'MESSAGE_DELETE',
      'MESSAGE_DELETE_BULK',
      'MESSAGE_REACTION_ADD',
      'MESSAGE_REACTION_REMOVE',
      'MESSAGE_REACTION_REMOVE_ALL',
      'USER_NOTE_UPDATE',
      'USER_SETTINGS_UPDATE',
      'VOICE_STATE_UPDATE',
      'TYPING_START',
      'RELATIONSHIP_ADD',
      'RELATIONSHIP_REMOVE',
      'WEBHOOKS_UPDATE'
    ]
  }
}
