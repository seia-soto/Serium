module.exports.permissions = 1
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0]) {
    message.delete()
    if (isNaN(nt.arguments[0]) === true || nt.arguments[0] > 129) return message.reply(nt.i('invalidParameter'))
    try {
      if (nt.arguments[0] > 101) {
        message.channel.bulkDelete(100)
      }
      message.channel.bulkDelete(nt.arguments[0])
    } catch (error) {
      console.error(error)
    }
    message.reply(nt.i('deleted').replace('{amount}', nt.arguments[0]))
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
