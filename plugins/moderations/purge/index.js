module.exports = (client, message, nt) => {
  if (nt.parameters[0]) {
    if (isNaN(nt.parameters[0]) && nt.parameters[0] > 101 && nt.parameters[0] === 0) return message.reply(nt.i('invalidParameter'))
    message.delete()
    message.channel.bulkDelete(nt.parameters[0])
    message.reply(nt.i('deleted').replace('{amount}', nt.parameters[0]))
      .then(notificate => {
        setTimeout(() => {
          notificate.delete()
        }, 4500)
      })
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
