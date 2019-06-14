// NOTE: Register for module-aliases, refer to package.json/_moduleAliases.
require('module-alias/register')

console.log('Booting up application...')

process.on('unhandledRejection', detailed => {
  if (!detailed) detailed = 'No detail provided.'
  console.error('UnhandledRejection:', detailed)
})

String.prototype.bind = function(parameters) {
  let text = this
  let keys = text.match(/\{(.*?)\}/g)

  if (!keys) return this

  keys.forEach(key => {
    const keyname = key.replace('{', '').replace('}', '')

    text = text.replace(key, parameters[keyname] || '')
  })

  return text
}

const Discord = require('discord.js')

const handles = require('./handles')
const structures = require('./structures')

const PreferenceIndicator = structures.PreferenceIndicator

console.log('Planning application...')

const client = new Discord.Client(PreferenceIndicator.Discord.Client)

client.once('ready', () => handles.ready(client))
client.on('message', message => handles.message(message, client))
client.on('guildMemberAdd', member => handles.guildMemberAdd(member, client))

client.login(PreferenceIndicator.App.Token)
