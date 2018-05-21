console.log('Starting up at ' + new Date())
// NOTE: You can use 'non-production' branch as Heroku version
const Discord = require('discord.js')
const fs = require('fs')
const events = require('events')

const _application = require('./application')
const _data = require('./data')
const _prompts = require('./prompts')

class Handler extends events {}
const application = new Handler()
const client = new Discord.Client({autoReconnect: true})
const endpoints = {
  prefix: ';', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: '' // NOTE: process.env.Discord
}
const prompts = new Map()

// NOTE: Administrations levels: it doesn't contains any translations or alias, options. Just leave options as 'undefined' not 'null'.
prompts.set('exec', { worker: _prompts.exec, language: 'en' })
prompts.set('script', { worker: _prompts.script, language: 'en' })
// NOTE: Don't initialize 'say' and 'sayd' prompt twice
prompts.set('avatar', { worker: _prompts.avatar, language: 'en' })
prompts.set('cat', { worker: _prompts.cat, language: 'en' })
prompts.set('choose', { worker: _prompts.choose, language: 'en' })
prompts.set('delete', { worker: _prompts.delete, language: 'en' })
prompts.set('dog', { worker: _prompts.dog, language: 'en' })
prompts.set('help', { worker: _prompts.help, language: 'en' })
prompts.set('library', { worker: _prompts.library, language: 'en' })
prompts.set('namuwiki', { worker: _prompts.namuwiki, language: 'en' })
prompts.set('neko', { worker: _prompts.neko, language: 'en' })
prompts.set('ping', { worker: _prompts.ping, language: 'en' })
prompts.set('probability', { worker: _prompts.probability, language: 'en' })
prompts.set('ready', { worker: _prompts.ready, language: 'en' })
prompts.set('rps', { worker: _prompts.rps, language: 'en' })
prompts.set('say', { worker: _prompts.say, language: 'en' })
prompts.set('sayd', { worker: _prompts.sayd, language: 'en' })
prompts.set('search', { worker: _prompts.search, language: 'en' })
prompts.set('shy', { worker: _prompts.shy, language: 'en' })
prompts.set('serverinfo', { worker: _prompts.serverinfo, language: 'en' })
prompts.set('userinfo', { worker: _prompts.userinfo, language: 'en' })
_application.functions.promptEnrollment.en_aliases(prompts, _prompts)
_application.functions.promptEnrollment.ko(prompts, _prompts)
_application.functions.promptEnrollment.ko_aliases(prompts, _prompts)

process.on('unhandledRejection', error => {
  console.error('Uncaught Promise Error: \n' + error.stack)
})

application.on('modifyed', () => {
  delete require.cache[require.resolve('./index')]
})

client.login(endpoints.Discord)
client.on('ready', () => {
  console.log(client.user.tag)
  client.user.setActivity(';help | seriumium.tk')
  client.user.setStatus('idle')
})
client.on('message', message => {
  try {
    if (message.channel.permissionsFor(message.author).has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
    if (message.author.id === '324541397988409355') permissions = 4
    const prompt = prompts.get(message.content.split(' ')[0].slice(endpoints.prefix.length).toLowerCase())
    const notAllowed =
      (message.author.bot)
      || (message.channel.type === 'dm')
      || (_data.configures['blacklist'][message.author.id])
      || (!message.content.startsWith(endpoints.prefix))
      || (!prompt)
      || (permissions < prompt.worker.permissions)
    if (notAllowed) { return }
    const nt = {
      arguments: message.content.split(' ').slice(1),
      i: _application.translations(prompt.language),
      application: application
    }
    prompt.worker.execute(client, message, nt)
  } catch (error) {
    console.error(error)
  }
})
