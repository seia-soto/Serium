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
prompts.set('note', { worker: _prompts.note, language: 'en' })
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
prompts.set('노트', { worker: _prompts.note, language: 'ko' })
// NOTE: Aliases
prompts.set('pfp', { worker: _prompts.avatar, language: 'en' })
prompts.set('pick', { worker: _prompts.choose, language: 'en' })
prompts.set('remove', { worker: _prompts.delete, language: 'en' })
prompts.set('rm', { worker: _prompts.delete, language: 'en' })
prompts.set('puppy', { worker: _prompts.dog, language: 'en' })
prompts.set('docs', { worker: _prompts.help, language: 'en' })
prompts.set('wiki', { worker: _prompts.library, language: 'en' })
prompts.set('wikipedia', { worker: _prompts.library, language: 'en' })
prompts.set('namu', { worker: _prompts.namuwiki, language: 'en' })
prompts.set('pong', { worker: _prompts.ping, language: 'en' })
prompts.set('프로필사진', { worker: _prompts.avatar, language: 'ko' })
prompts.set('프사', { worker: _prompts.avatar, language: 'ko' })
prompts.set('냥이', { worker: _prompts.cat, language: 'ko' })
prompts.set('캣', { worker: _prompts.cat, language: 'ko' })
prompts.set('뽑기', { worker: _prompts.choose, language: 'ko' })
prompts.set('고르기', { worker: _prompts.choose, language: 'ko' })
prompts.set('개', { worker: _prompts.dog, language: 'ko' })
prompts.set('제거', { worker: _prompts.delete, language: 'ko' })
prompts.set('지우기', { worker: _prompts.delete, language: 'ko' })
prompts.set('도움', { worker: _prompts.help, language: 'ko' })
prompts.set('위키백과', { worker: _prompts.library, language: 'ko' })
prompts.set('위백', { worker: _prompts.library, language: 'ko' })
prompts.set('나무위키', { worker: _prompts.namuwiki, language: 'ko' })
prompts.set('나무', { worker: _prompts.namuwiki, language: 'ko' })
prompts.set('나뮈', { worker: _prompts.namuwiki, language: 'ko' })
prompts.set('네코', { worker: _prompts.neko, language: 'ko' })
prompts.set('핑', { worker: _prompts.ping, language: 'ko' })
prompts.set('퐁', { worker: _prompts.ping, language: 'ko' })
prompts.set('확률', { worker: _prompts.probability, language: 'ko' })
prompts.set('준비', { worker: _prompts.ready, language: 'ko' })
prompts.set('가바보', { worker: _prompts.rps, language: 'ko' })
prompts.set('구글', { worker: _prompts.search, language: 'ko' })
prompts.set('부끄', { worker: _prompts.shy, language: 'ko' })
prompts.set('서버정보', { worker: _prompts.serverinfo, language: 'ko' })
prompts.set('유저정보', { worker: _prompts.userinfo, language: 'ko' })
prompts.set('prob', { worker: _prompts.probability, language: 'ko' })

process.on('unhandledRejection', error => {
  console.error('Uncaught Promise Error: \n' + error.stack)
})

application.on('modifyed', () => {
  delete require.cache[require.resolve('./index')]
})

client.login(endpoints.Discord)
client.on('ready', () => {
  console.log(client.user.tag)
  client.user.setActivity(';help (seriumium.tk)')
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
      i: _application.translations(prompt.language),
      application: application
    }
    prompt.worker.execute(client, message, nt)
  } catch (error) {
    console.error(error)
  }
})
