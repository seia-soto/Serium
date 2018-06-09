module.exports.permissions = 1
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0]) {
    message.delete()
    if (isNaN(nt.arguments[0]) === true || nt.arguments[0] > 200) return message.reply(nt.i('invalidParameter'))
    try {
      if (nt.arguments[0] > 101) {
        message.channel.bulkDelete(100)
      }
      message.channel.bulkDelete(nt.arguments[0] - 100)
    } catch (error) {
      console.error(error)
    }
    message.reply(nt.i('deleted').replace('{amount}', nt.arguments[0]))
      .then(notificate => {
        setTimeout(() => {
          notificate.delete()
        }, 4500)
      })
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
