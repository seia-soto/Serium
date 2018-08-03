module.exports = (client, message, nt) => {
  message.channel.send(nt.arguments.slice(0).join(' '))
}
