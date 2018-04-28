module.exports.permissions = 1
module.exports.execute = (client, message, nt) => {
  message.delete()
  message.reply(nt.arguments.slice(0).join(' '))
}
