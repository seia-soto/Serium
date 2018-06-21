module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0]) {
    message.channel.send(nt.arguments[0] + ', You should not do that!')
  } else {
    message.reply('You are doing the same thing that you said should not do that, so you are stupid!')
  }
}
