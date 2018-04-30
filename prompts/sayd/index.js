module.exports.permissions = 1
module.exports.execute = (client, message, nt) => {
  message.delete()
  message.channel.send(nt.arguments.slice(0).join(' '))
}
