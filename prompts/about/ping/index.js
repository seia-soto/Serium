module.exports.permissions = 0
module.exports.execute = (client, message) => {
  message.reply(Math.round(client.ping) + 'ms')
}
