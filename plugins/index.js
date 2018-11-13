// NOTE: Generic
module.exports.help = {
  execute: require('./generic/help'),
  usage: 'help [command]',
  permissions: 'common'
}
module.exports.invite = {
  execute: require('./generic/invite'),
  usage: 'invite',
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
module.exports.setwelcome = this.welcome

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
  usage: 'neko',
  permissions: 'common'
}

// NOTE: Moderate
module.exports.purge = {
  execute: require('./moderate/purge'),
  usage: 'purge [size]',
  permissions: 'moderate'
}

// NOTE: Music
module.exports.itunes = {
  execute: require('./music/itunes'),
  usage: 'itunes [keyword]',
  permissions: 'common'
}

// NOTE: Util
module.exports.applicationinfo = {
  execute: require('./util/applicationinfo'),
  usage: 'applicationinfo',
  permissions: 'common'
}
module.exports.cdnjs = {
  execute: require('./util/cdnjs'),
  usage: 'cdnjs [package]',
  permissions: 'common'
}
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
