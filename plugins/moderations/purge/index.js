module.exports = (client, message, nt) => {
  if (nt.parameters[0]) {
    message.delete()
    if (isNaN(nt.parameters[0]) || nt.parameters[0] > 200) return message.reply(nt.i('invalidParameter'))
    try {
      if (nt.parameters[0] > 101) {
        message.channel.bulkDelete(100)
        message.channel.bulkDelete(nt.parameters[0] - 100)
      } else {
        message.channel.bulkDelete(nt.parameters[0])
      }
    } catch (error) {
      console.error(error)
    }
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
