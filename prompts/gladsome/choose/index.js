module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  if (nt.arguments.size > 46) {
    message.reply(nt.i('longParameter'))
    return
  }
  message.reply(nt.i('choose').resultIs + '; **' + nt.arguments[Math.floor(Math.random() * nt.arguments.length)] + '**')
}
