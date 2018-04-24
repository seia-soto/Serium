module.exports.permissions = 0
module.exports.execute = (client, message) => {
  const datetime = new Date()
  message.reply('Requesting ..')
    .then(message => {
      const latency = datetime - message.createdTimestamp
      message.edit(latency + 'ms')
    })
}
