module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.reply(nt.i('readyPlayer').replace('{name}', message.author.username))
}
