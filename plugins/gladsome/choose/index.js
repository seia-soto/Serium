module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  if (nt.arguments.size > 129) {
    message.reply(nt.i('longParameter'))
    return
  }
  message.reply(nt.i('chose', true).replace('{picked}', ' ' + nt.arguments[Math.floor(Math.random() * nt.arguments.length)].replace('@here', '^@!?here').replace('@everyone', '^@!?everyone')))
}
