module.exports = (client, message) => {
  message.reply(Math.round(client.ping) + 'ms')
}
