module.exports = (client, message, nt) => {
  message.delete()
  message.channel.send(nt.parameters.slice(0).join(' '))
}
