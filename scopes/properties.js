module.exports = {
  application: {
    dictionary: './plugins',
    permissions: {
      administrate: 0b001,
      moderate: 0b010,
      common: 0b100
    }
  },
  client: {
    options: {
      autoReconnect: true,
      disableEveryone: true
    },
    token: 'NTAyMDcwNjM2MzExNzQwNDI2.DquJcA.nlDpuzqlq0NqsOtiTmv6Sex8MJI',
    invite: 'https://discordapp.com/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot'
  },
  embed: {
    color: 16761035
  }
}
