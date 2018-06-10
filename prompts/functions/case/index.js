module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const string = nt.arguments.slice(0).join(' ')
  message.channel.send({embed: {
    color: 16761035,
    title: nt.i('case', true),
    description: '\n**' + nt.i('uppercase', true) + '** ' + string.toUpperCase() +
    '\n**' + nt.i('lowercase', true) + '** ' + string.toLowerCase()
  }})
}
