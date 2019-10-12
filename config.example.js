module.exports = {
  app: {
    token: '',
    ux: {
      basicPermissions: [
        'SEND_MESSAGES'
      ]
    },
    client: {
      requestMethod: 'sequential',
      messageCacheMaxSize: 400,
      messageCacheLifetime: 0,
      messageSweepInterval: 30,
      fetchAllMembers: false,
      disableEveryone: true,
      restWsBridgeTimeout: 10000,
      restTimeOffset: 550,
      retryLimit: Infinity,
      disabledEvents: [
        'GUILD_SYNC',
        'USER_NOTE_UPDATE',
        'TYPING_START',
        'USER_SETTINGS_UPDATE'
      ],
      ws: {
        large_threshold: 250,
        compress: true
      },
      http: {
        version: 7,
        api: 'https://discordapp.com/api',
        cdn: 'https://cdn.discordapp.com',
        invite: 'https://discordapp.com/invite'
      }
    },
    fork: {
      automaticRespawn: true,
      arguments: [],
      quantity: 'auto',
      waitSpawning: true,
      spawningDelay: 5000,
      killingDelay: 500
    }
  },
  database: {
    options: {
      client: 'mysql2', // WARNING: No support for other DBMS engines.
      connection: {
        host: 'localhost',
        user: '',
        password: '',
        database: ''
      },
      pool: {
        min: 1,
        max: 8
      }
    },
    tables: {
      user: 'user',
      guild: 'guild'
    }
  },
  permissions: [
    {
      name: 'common',
      flag: 0x00,
      required: {
        identify: [],
        roles: [],
        permissions: []
      }
    },
    {
      name: 'staff',
      flag: 0x01,
      required: {
        identify: [],
        roles: [],
        permissions: [
          'MANAGE_GUILD'
        ]
      }
    },
    {
      name: 'dev',
      flag: 0x11,
      required: {
        identify: [
          ''
        ],
        roles: [],
        permissions: []
      }
    }
  ],
  defaults: {
    settings: {
      user: {
        index: 0,
        identify: 0,
        language: 'ko'
      },
      guild: {
        index: 0,
        identify: 0,
        prefix: 'se'
      }
    }
  }
}
