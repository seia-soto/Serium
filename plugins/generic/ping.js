module.exports = (client, message, data, translate) => {
  message.reply(Math.round(client.ping) + translate.ping[Math.floor(Math.random() * translate.ping.length)])
}
