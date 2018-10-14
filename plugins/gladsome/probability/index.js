module.exports = (client, message, nt) => {
  const probability = Math.floor(Math.random() * 100) + 1
  const reason = nt.parameters.slice(0).join(' ')
  const translate = nt.i('probability', true)
  const result = nt.i('percentageIs')
    .replace('{of}', reason)
    .replace('{percentage}', probability)
  message.channel.send(result)
}
