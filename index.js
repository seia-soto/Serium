console.log('Starting up at ' + new Date())
const Discord = require('discord.js')
const fs = require('fs')
const Hashmap = require('hashmap')

const _application = require('./application')
const _data = require('./data')
const _prompts = require('./prompts')

const client = new Discord.Client({shardCount: 2})
const prompts = new Hashmap()
let prompt
let permissions
let notAllowed
let nt

fs.open('./data/audit/logs.txt','a+', (error, data) => {
  if (data === undefined) {
    console.log('Created log output at ' + new Date())
  } else {
    console.log('Log output has found on this application (managed) at ' + new Date())
  }
})

prompts.set('avatar', prompts.avatar)
prompts.set('delete', prompts.delete)
prompts.set('help', prompts.help)
prompts.set('library', prompts.library)
prompts.set('neko', prompts.neko)
prompts.set('ping', _prompts.ping)
prompts.set('probability', prompts.probability)
prompts.set('say', prompts.say)
prompts.set('sayd', prompts.sayd)

_application.log(_data.log.initialized)
client.login(_data.configure.endpoints.Discord)
client.destroy().then(() => {
  _application.log(_data.log.session_destroyed)
  client.login(_data.configure.endpoints.Discord)
})

client.on('ready', () => {
  _application.log(_data.log.signed_in)
  client.user.setActivity(_data.configure.personally.activity)
  client.user.setStatus(_data.configure.personally.status)
})
client.on('message', message => {
  if (message.channel.permissionsFor(message.author).has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
  if (message.author.id === '324541397988409355') permissions = 4
  prompt = prompts.get(message.content.split(' ')[0].slice(_data.configure.endpoints.prefix.length))
  nt = {
    arguments: message.content.split(' ').slice(1)
  }
  notAllowed =
    (message.author.bot)
    || (!message.content.startsWith(_data.configure.endpoints.prefix))
    || (!prompt)
    || (permissions < prompt.permissions)
  if (notAllowed) { return }
  prompt.execute(client, message, nt)
})
