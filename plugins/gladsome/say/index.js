module.exports = (client, message, nt) => {
  message.channel.send(nt.parameters.slice(0).join(' '))
}
