console.log('Starting up at ' + new Date())
const Discord = require('discord.js')
const fs = require('fs')

const _application = require('./application')
const _prompts = require('./prompts')

const client = new Discord.Client({autoReconnect: true})
const endpoints = {
  prefix: ';', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: 'NDI5OTEzNDgwNzA4MDk2MDAw.DeCDUw.JHYCyJGdSGSMObFuC7rTSPWt8DA' // NOTE: process.env.Discord
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
prompts.set('아바타', { worker: _prompts.avatar, language: 'ko' })
prompts.set('고양이', { worker: _prompts.cat, language: 'ko' })
prompts.set('선택', { worker: _prompts.choose, language: 'ko' })
prompts.set('강아지', { worker: _prompts.dog, language: 'ko' })
prompts.set('삭제', { worker: _prompts.delete, language: 'ko' })
prompts.set('도움말', { worker: _prompts.help, language: 'ko' })
prompts.set('라이브러리', { worker: _prompts.library, language: 'ko' })
prompts.set('나무위키', { worker: _prompts.namuwiki, language: 'ko' })
prompts.set('네코', { worker: _prompts.neko, language: 'ko' })
prompts.set('질의', { worker: _prompts.ping, language: 'ko' })
prompts.set('확률', { worker: _prompts.probability, language: 'ko' })
prompts.set('준비', { worker: _prompts.ready, language: 'ko' })
prompts.set('가위바위보', { worker: _prompts.rps, language: 'ko' })
prompts.set('검색', { worker: _prompts.search, language: 'ko' })
prompts.set('부끄러워', { worker: _prompts.shy, language: 'ko' })
prompts.set('서버정보', { worker: _prompts.serverinfo, language: 'ko' })
prompts.set('사용자정보', { worker: _prompts.userinfo, language: 'ko' })

process.on('unhandledRejection', error => {
  console.error('Uncaught Promise Error: \n' + error.stack)
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
      || (!message.content.startsWith(endpoints.prefix))
      || (!prompt)
      || (permissions < prompt.worker.permissions)
    if (notAllowed) { return }
    const nt = {
      arguments: message.content.split(' ').slice(1),
      i: _application.translations(prompt.language)
    }
    prompt.worker.execute(client, message, nt)
  } catch (error) {
    console.error(error)
  }
})
