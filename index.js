console.log('Starting up at ' + new Date())
const Discord = require('discord.js')
const fs = require('fs')
const Hashmap = require('hashmap')

const _application = require('./application')
const _data = require('./data')
const _prompts = require('./prompts')

const client = new Discord.Client({autoReconnect: true})
const endpoints = {
  prefix: '.', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: process.env.Discord // NOTE: 'Client Token'
}
const prompts = {
  names: new Hashmap(),
  languages: new Hashmap()
}
let cache = { first: undefined, second: undefined }
let notAllowed
let nt
let prompt
let permissions

console.log('Initializing available prompts about supported languages')
// Administrations levels: it doesn't contains any translations or alias, options. Just leave options as 'undefined' not 'null'.
prompts.names.set('exec', _prompts.exec)
prompts.names.set('script', _prompts.script)
// Don't initialize 'say' and 'sayd' prompt twice
prompts.names.set('avatar', _prompts.avatar)
prompts.names.set('cat', _prompts.cat)
prompts.names.set('delete', _prompts.delete)
prompts.names.set('dog', _prompts.dog)
prompts.names.set('help', _prompts.help)
prompts.names.set('library', _prompts.library)
prompts.names.set('neko', _prompts.neko)
prompts.names.set('ping', _prompts.ping)
prompts.names.set('probability', _prompts.probability)
prompts.names.set('say', _prompts.say)
prompts.names.set('sayd', _prompts.sayd)
prompts.names.set('search', _prompts.search)
prompts.names.set('serverinfo', _prompts.serverinfo)
prompts.names.set('userinfo', _prompts.userinfo)
prompts.names.set('아바타', _prompts.avatar)
prompts.names.set('고양이', _prompts.cat)
prompts.names.set('강아지', _prompts.dog)
prompts.names.set('삭제', _prompts.delete)
prompts.names.set('도움말', _prompts.help)
prompts.names.set('라이브러리', _prompts.library)
prompts.names.set('네코', _prompts.neko)
prompts.names.set('질의', _prompts.ping)
prompts.names.set('확률', _prompts.probability)
prompts.names.set('검색', _prompts.search)
prompts.names.set('서버정보', _prompts.serverinfo)
prompts.names.set('사용자정보', _prompts.userinfo)
// Initialize with ISO country code
cache = [
  'avatar', 'cat', 'delete', 'dog', 'exec', 'help', 'library', 'neko', 'ping', 'probability', 'say', 'sayd', 'script', 'search', 'serverinfo', 'userinfo'
]
cache.forEach(cached => { prompts.languages.set(cached, 'en') })
cache = [
  '아바타', '고양이', '삭제', '강아지', '도움말', '라이브러리', '네코', '질의', '확률', '검색', '서버정보', '사용자정보'
]
cache.forEach(cached => { prompts.languages.set(cached, 'ko') })

_application.log(_data.log.initialized)
process.on('unhandledRejection', error => {
  console.error('Uncaught Promise Error: \n' + error.stack)
})

client.login(endpoints.Discord)
client.on('ready', () => {
  _application.log(_data.log.signed_in)
  _application.log(_data.log.started_up)
  console.log()
  console.log(client.user.tag)
  client.user.setActivity(';help | seriumium.tk')
  client.user.setStatus('idle')
})
client.on('message', message => {
  try {
    if (message.channel.type === 'dm') return
    if (message.channel.permissionsFor(message.author).has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
    if (message.author.id === '324541397988409355' || message.author.id === '404107090009784320' || message.author.id === '265003834521157633') permissions = 4
    prompt = prompts.names.get(message.content.split(' ')[0].slice(endpoints.prefix.length))
    notAllowed =
      (message.author.bot)
      || (message.channel.type === 'dm')
      || (!message.content.startsWith(endpoints.prefix))
      || (!prompt)
      || (permissions < prompt.permissions)
    if (notAllowed) { return }
    cache.first = message.content.split(' ')[0].slice(endpoints.prefix.length)
    nt = {
      arguments: message.content.split(' ').slice(1),
      language: prompts.languages.get(cache.first),
      i: _data.translations
    }
    prompt.execute(client, message, nt)
  } catch (error) {
    console.error(error)
  }
})
