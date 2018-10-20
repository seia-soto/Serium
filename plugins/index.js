// NOTE: Generic
module.exports.help = {
  execute: require('./generic/help'),
  usage: 'help [command]'
}
module.exports.language = {
  execute: require('./generic/language'),
  usage: 'help <language>'
}
module.exports.lang = this.language
module.exports.ping = {
  execute: require('./generic/ping'),
  usage: 'ping'
}
module.exports.pong = this.ping

// NOTE: Game
module.exports.arcaea = {
  execute: require('./game/arcaea'),
  usage: 'arcaea'
}

// NOTE: Util
module.exports.serverinfo = {
  execute: require('./util/serverinfo'),
  usage: 'serverinfo'
}
