module.exports = (client, message, data, translate) => {
  const coin = Math.floor(Math.random() * 2)

  message.channel.send(translate.coinflip[coin])
}
