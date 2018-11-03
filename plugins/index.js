// NOTE: Generic
module.exports.help = {
  execute: require('./generic/help'),
  usage: 'help [command]',
  permissions: 'administrate'
}
module.exports.language = {
  execute: require('./generic/language'),
  usage: 'language <language>',
  permissions: 'administrate'
}
module.exports.lang = this.language
module.exports.ping = {
  execute: require('./generic/ping'),
  usage: 'ping',
  permissions: 'administrate'
}
module.exports.pong = this.ping
module.exports.welcome = {
  execute: require('./generic/welcome'),
  usage: 'welcome <message>',
  permissions: 'administrate'
}

// NOTE: Crypto
module.exports.crypto = {
  execute: require('./crypto/crypto'),
  usage: 'crypto [algorithm] [hash]',
  permissions: 'administrate'
}
module.exports.md5 = {
  execute: require('./crypto/md5'),
  usage: 'md5 [context]',
  permissions: 'administrate'
}

// NOTE: Fun
module.exports.coinflip = {
  execute: require('./fun/coinflip'),
  usage: 'coinflip',
  permissions: 'administrate'
}
module.exports.say = {
  execute: require('./fun/say'),
  usage: 'say [context]',
  permissions: 'administrate'
}
module.exports.sayd = {
  execute: require('./fun/sayd'),
  usage: 'sayd [context]',
  permissions: 'administrate'
}

// NOTE: Game
module.exports.arcaea = {
  execute: require('./game/arcaea'),
  usage: 'arcaea',
  permissions: 'administrate'
}

// NOTE: Image
module.exports.avatar = {
  execute: require('./image/avatar'),
  usage: 'avatar [mention]',
  permissions: 'administrate'
}
module.exports.cat = {
  execute: require('./image/cat'),
  usage: 'cat',
  permissions: 'administrate'
}
module.exports.dog = {
  execute: require('./image/dog'),
  usage: 'dog',
  permissions: 'administrate'
}

// NOTE: Util
module.exports.serverinfo = {
  execute: require('./util/serverinfo'),
  usage: 'serverinfo',
  permissions: 'administrate'
}
module.exports.userinfo = {
  execute: require('./util/userinfo'),
  usage: 'userinfo [@mention]',
  permissions: 'administrate'
}
module.exports.wiki = {
  execute: require('./util/wiki'),
  usage: 'wiki [keyword]',
  permissions: 'administrate'
}
