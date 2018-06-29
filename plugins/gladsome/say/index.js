module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.channel.send(nt.arguments.slice(0).join(' '))
}
