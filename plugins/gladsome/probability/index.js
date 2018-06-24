module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const probability = Math.floor(Math.random() * 100) + 1
  const reason = nt.arguments.slice(0).join(' ').replace('@here', '^@!?here').replace('@everyone', '^@!?everyone')
  const translate = nt.i('probability', true)
  message.channel.send(nt.i('percentageIs').replace('{of}', reason).replace('{percentage}', probability))
}
