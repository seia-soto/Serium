console.log('Starting up at ' + new Date())
const Discord = require('discord.js')

const _application = require('./application')
const _data = require('./data')
const _prompts = require('./prompts')

const client = new Discord.Client({autoReconnect: true})
const endpoints = {
  prefix: ';', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: '' // NOTE: process.env.Discord
}
const prompts = {
  __comment__ap: 'Administrations levels: it does not contains any translations, alias or options.',
  exec: { worker: _prompts.exec, language: 'en' },
  notificate: { worker: _prompts.notificate, language: 'en' },
  script: { worker: _prompts.script, language: 'en' },
  __comment__dp: 'Do not initialize say and sayd prompt twice.',
  avatar: { worker: _prompts.avatar, language: 'en' },
  cat: { worker: _prompts.cat, language: 'en' },
  choose: { worker: _prompts.choose, language: 'en' },
  delete: { worker: _prompts.delete, language: 'en' },
  dog: { worker: _prompts.dog, language: 'en' },
  help: { worker: _prompts.help, language: 'en' },
  library: { worker: _prompts.library, language: 'en' },
  namuwiki: { worker: _prompts.namuwiki, language: 'en' },
  neko: { worker: _prompts.neko, language: 'en' },
  ping: { worker: _prompts.ping, language: 'en' },
  probability: { worker: _prompts.probability, language: 'en' },
  ready: { worker: _prompts.ready, language: 'en' },
  rps: { worker: _prompts.rps, language: 'en' },
  say: { worker: _prompts.say, language: 'en' },
  sayd: { worker: _prompts.sayd, language: 'en' },
  search: { worker: _prompts.search, language: 'en' },
  shy: { worker: _prompts.shy, language: 'en' },
  serverinfo: { worker: _prompts.serverinfo, language: 'en' },
  userinfo: { worker: _prompts.userinfo, language: 'en' },
  note: { worker: _prompts.note, language: 'en' },
  hash: { worker: _prompts.hash, language: 'en' },
  case: { worker: _prompts.case, language: 'en' },
  colored: { worker: _prompts.colored, language: 'en' },
  __comment__lpkk: 'Korean Language Pack; remove all these aliases if you do not want to use.',
  '아바타': { worker: _prompts.avatar, language: 'ko' },
  '고양이': { worker: _prompts.cat, language: 'ko' },
  '선택': { worker: _prompts.choose, language: 'ko' },
  '삭제': { worker: _prompts.delete, language: 'ko' },
  '강아지': { worker: _prompts.dog, language: 'ko' },
  '도움말': { worker: _prompts.help, language: 'ko' },
  '라이브러리': { worker: _prompts.library, language: 'ko' },
  '나무위키': { worker: _prompts.namuwiki, language: 'ko' },
  '네코': { worker: _prompts.neko, language: 'ko' },
  '질의': { worker: _prompts.ping, language: 'ko' },
  '확률': { worker: _prompts.probability, language: 'ko' },
  '준비': { worker: _prompts.ready, language: 'ko' },
  '가위바위보': { worker: _prompts.rps, language: 'ko' },
  '검색': { worker: _prompts.search, language: 'ko' },
  '부끄러워': { worker: _prompts.shy, language: 'ko' },
  '서버정보': { worker: _prompts.serverinfo, language: 'ko' },
  '사용자정보': { worker: _prompts.userinfo, language: 'ko' },
  '노트': { worker: _prompts.note, language: 'ko' },
  '해시': { worker: _prompts.hash, language: 'ko' },
  '격': { worker: _prompts.case, language: 'ko' },
  '색': { worker: _prompts.colored, language: 'ko' }
}

process.on('unhandledRejection', (error) => {
  console.error(error.stack)
})

client.login(endpoints.Discord)
client.on('ready', () => {
  console.log(client.user.tag)
  client.user.setActivity(endpoints.prefix + 'help (Initialized, ' + require('./package.json').version + ')')
  client.user.setStatus('online')
})
client.on('message', (message) => {
  const notAllowedEnviroments =
    (message.author.bot)
    || (message.channel.type === 'dm')
    || (!message.content.startsWith(endpoints.prefix))
  if (notAllowedEnviroments) { return }
  if (message.member.permissions.has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
  if (message.author.id === '324541397988409355') permissions = 4
  const prompt = prompts[message.content.split(' ')[0].slice(endpoints.prefix.length).toLowerCase()]
  const notAllowed =
    (!prompt)
    || (permissions < prompt.worker.permissions)
  if (notAllowed) { return }
  const nt = {
    arguments: message.content.split(' ').slice(1),
    i: _application.translations(prompt.language)
  }
  prompt.worker.execute(client, message, nt)
})
