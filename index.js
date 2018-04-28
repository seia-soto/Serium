console.log('Starting up at ' + new Date())
const Discord = require('discord.js')
const fs = require('fs')
const Hashmap = require('hashmap')

const _application = require('./application')
const _data = require('./data')
const _prompts = require('./prompts')

const client = new Discord.Client({shardCount: 1})
const prompts = {
  names: new Hashmap(),
  languages: new Hashmap(),
  translations: new Hashmap()
}
let cache = { first: undefined, second: undefined }
let notAllowed
let nt
let prompt
let permissions

console.log('Initializing available prompts about supported languages')
// Don't initialize 'say' and 'sayd' prompt twice
prompts.names.set('avatar', _prompts.avatar)
prompts.names.set('delete', _prompts.delete)
prompts.names.set('help', _prompts.help)
prompts.names.set('library', _prompts.library)
prompts.names.set('neko', _prompts.neko)
prompts.names.set('ping', _prompts.ping)
prompts.names.set('probability', _prompts.probability)
prompts.names.set('say', _prompts.say)
prompts.names.set('sayd', _prompts.sayd)
prompts.names.set('아바타', _prompts.avatar)
prompts.names.set('삭제', _prompts.delete)
prompts.names.set('도움말', _prompts.help)
prompts.names.set('라이브러리', _prompts.library)
prompts.names.set('네코', _prompts.neko)
prompts.names.set('질의', _prompts.ping)
prompts.names.set('확률', _prompts.probability)
// Initialize with ISO country code
cache = ['avatar', 'delete', 'help', 'library', 'neko', 'ping', 'probability', 'say', 'sayd']
cache.forEach(cached => { prompts.languages.set(cached, 'en') })
cache = ['아바타', '삭제', '도움말', '라이브러리', '네코', '질의', '확률']
cache.forEach(cached => { prompts.languages.set(cached, 'ko') })
// Register the translations
cache = {
  avatar: undefined,
  delete: {
    invaild_parameter: 'Invaild parameter: only data type of int can be vaild and it must smaller then 45'
  },
  help: {
    title: 'Seriumium#2403',
    description: 'by <@324541397988409355> code with heart\n\n[Support server](https://discord.gg/YzBZNQq)\n[Invite Seriumium#2403](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)\n[GitHub](https://github.com/seriumium/seriumiumDiscord)\n[Webpage](https://seriumium.github.io)',
    names: {
      seriumium: 'Seriumium',
      moderations: 'Moderations',
      images: 'Images',
      gladsome: 'Gladsome'
    },
    values: {
      seriumium: '`help` `library` `ping` `say`',
      moderations: '`delete` `sayd`',
      images: '`avatar` `neko`',
      gladsome: '`probability`'
    }
  },
  library: {
    invaild_string: 'There is no string to search'
  },
  neko: undefined,
  ping: undefined,
  probability: {
    result: {
      first: 'The probability that ',
      second: ' is ',
      thrid: '%'
    }
  },
  say: undefined,
  sayd: undefined
}
prompts.translations.set('en', cache)
cache = {
  avatar: undefined,
  delete: {
    invaild_parameter: '잘못된 매개변수: 올바른 데이터형은 int이며 45보다 작아야 합니다'
  },
  help: {
    title: 'Seriumium#2403',
    description: '<@324541397988409355>이 마음과 함께 개발했습니다\n\n[지원 서버](https://discord.gg/YzBZNQq)\n[Seriumium#2403 초대하기](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)\n[GitHub](https://github.com/seriumium/seriumiumDiscord)\n[웹페이지](https://seriumium.github.io))',
    names: {
      seriumium: 'Seriumium',
      moderations: '관리',
      images: '이미지',
      gladsome: '재미'
    },
    values: {
      seriumium: '`도움말` `라이브러리` `질의` `say`',
      moderations: '`삭제` `sayd`',
      images: '`아바타` `네코`',
      gladsome: '`확률`'
    }
  },
  library: {
    invaild_string: '찾을 문자열을 인수에서 찾을 수 없습니다'
  },
  neko: undefined,
  ping: undefined,
  probability: {
    result: {
      first: undefined,
      second: ' 일확률은 ',
      thrid: '%'
    }
  },
  say: undefined,
  sayd: undefined
}
prompts.translations.set('ko', cache)

_application.log(_data.log.initialized)
client.login(process.env.Discord)
client.destroy().then(() => {
  client.login(process.env.Discord)
})

client.on('ready', () => {
  _application.log(_data.log.signed_in)
  _application.log(_data.log.started_up)
  client.user.setActivity(_data.configure.personally.activity)
  client.user.setStatus(_data.configure.personally.status)
})
client.on('message', message => {
  if (message.channel.type === 'dm') return
  if (message.channel.permissionsFor(message.author).has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
  if (message.author.id === '324541397988409355') permissions = 4
  prompt = prompts.names.get(message.content.split(' ')[0].slice(_data.configure.endpoints.prefix.length))
  notAllowed =
    (message.author.bot)
    || (!message.content.startsWith(_data.configure.endpoints.prefix))
    || (!prompt)
    || (permissions < prompt.permissions)
  if (notAllowed) { return }
  cache.first = message.content.split(' ')[0].slice(_data.configure.endpoints.prefix.length)
  cache.second = prompts.languages.get(cache.first)
  nt = {
    arguments: message.content.split(' ').slice(1),
    translations: prompts.translations.get(cache.second)
  }
  prompt.execute(client, message, nt)
})
