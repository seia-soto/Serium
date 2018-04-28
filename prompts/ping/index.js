module.exports.permissions = 0
module.exports.execute = (client, message) => {
  const datetime = new Date()
  message.reply(`${client.ping}ms`)
}
