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
  permissions: 'moderate'
}

// NOTE: Game
module.exports.arcaea = {
  execute: require('./game/arcaea'),
  usage: 'arcaea',
  permissions: 'common'
}
module.exports.minecraft = {
  execute: require('./game/minecraft'),
  usage: 'minecraft <server>',
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
  usage: 'userinfo',
  permissions: 'common'
}

// NOTE: Image
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
