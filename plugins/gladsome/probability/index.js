module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const probability = Math.floor(Math.random() * 100) + 1
  const reason = nt.arguments.slice(0).join(' ')
  const translate = nt.i('probability', true)
  message.channel.send(nt.i('percentageIs'), probability)
}
