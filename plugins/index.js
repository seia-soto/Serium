// NOTE: Generic
module.exports.help = {
  execute: require('./generic/help'),
  usage: 'help [command]',
  permissions: 'common'
}
module.exports.language = {
  execute: require('./generic/language'),
  usage: 'language <language>',
  permissions: 'common'
}
module.exports.lang = this.language
module.exports.ping = {
  execute: require('./generic/ping'),
  usage: 'ping',
  permissions: 'common'
}
module.exports.pong = this.ping
module.exports.welcome = {
  execute: require('./generic/welcome'),
  usage: 'welcome <message>',
  permissions: 'common'
}

// NOTE: Crypto
module.exports.crypto = {
  execute: require('./crypto/crypto'),
  usage: 'crypto [algorithm] [hash]',
  permissions: 'common'
}
module.exports.md5 = {
  execute: require('./crypto/md5'),
  usage: 'md5 [context]',
  permissions: 'common'
}

// NOTE: Fun
module.exports.coinflip = {
  execute: require('./fun/coinflip'),
  usage: 'coinflip',
  permissions: 'common'
}
module.exports.if = {
  execute: require('./fun/if'),
  usage: 'if [context]',
  permissions: 'common'
}
module.exports.say = {
  execute: require('./fun/say'),
  usage: 'say [context]',
  permissions: 'common'
}
module.exports.sayd = {
  execute: require('./fun/sayd'),
  usage: 'sayd [context]',
  permissions: 'common'
}

// NOTE: Game
module.exports.arcaea = {
  execute: require('./game/arcaea'),
  usage: 'arcaea',
  permissions: 'common'
}

// NOTE: Image
module.exports.avatar = {
  execute: require('./image/avatar'),
  usage: 'avatar [mention]',
  permissions: 'common'
}
module.exports.cat = {
  execute: require('./image/cat'),
  usage: 'cat',
  permissions: 'common'
}
module.exports.dog = {
  execute: require('./image/dog'),
  usage: 'dog',
  permissions: 'common'
}
module.exports.neko = {
  execute: require('./image/neko'),
  usage: 'dog',
  permissions: 'common'
}

// NOTE: Music
module.exports.itunes = {
  execute: require('./music/itunes'),
  usage: 'itunes',
  permissions: 'common'
}

// NOTE: Util
module.exports.serverinfo = {
  execute: require('./util/serverinfo'),
  usage: 'serverinfo',
  permissions: 'common'
}
module.exports.userinfo = {
  execute: require('./util/userinfo'),
  usage: 'userinfo [@mention]',
  permissions: 'common'
}
module.exports.wiki = {
  execute: require('./util/wiki'),
  usage: 'wiki [keyword]',
  permissions: 'common'
}
module.exports.translate = {
  execute: require('./util/translate'),
  usage: 'translate [to(language)] [context]',
  permissions: 'common'
}
