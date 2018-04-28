module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.reply(nt.arguments.slice(0).join(' ').replace('@here', '^@!?here').replace('@everyone', '^@!?everyone'))
}
