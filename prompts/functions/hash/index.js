const hash = require('./hash')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const string = nt.arguments.slice(0).join(' ')
  message.channel.send({embed: {
    color: 16761035,
    title: nt.i('messagedigest', true) + ' 5',
    description: '**' + nt.i('method', true) + '** MD5, UTF8 Encoded (Hex)' +
    '\n**' + nt.i('original', true) + '** ' + string +
    '\n**' + nt.i('hashed', true) + '** ' + hash(string)
  }})
}
