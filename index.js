const Discord = require('discord.js')

const handles = require('./handles')
const structures = require('./structures')

const {PreferenceIndicator, CaptchaManager} = structures

process.on('unhandledRejection', detailed => {
  if (!detailed) detailed = 'No detail provided.'
  console.error('UnhandledRejection:', detailed)
})

console.log(`Planning application...`)

const client = new Discord.Client(PreferenceIndicator.Discord.Client)

client.once('ready', () => handles.ready(client))
client.on('message', message => handles.message(message, client))
client.on('guildMemberAdd', member => handles.guildMemberAdd(member, client))

client.login(PreferenceIndicator.App.Token)
