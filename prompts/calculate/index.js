module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const expression = nt.arguments.slice(0).join(' ')
  const isValid = /\d+\s+\+\s+\d+/.exec(expression)
  if (isValid) {
    message.reply(eval(expression))
  }
}
