module.exports = (client, message, nt) => {
  if (nt.parameters.size > 129) {
    message.reply(nt.i('longParameter'))
    return
  }
  message.reply(nt.i('chose', true).replace('{picked}', ' ' + nt.parameters[Math.floor(Math.random() * nt.parameters.length)]))
}
