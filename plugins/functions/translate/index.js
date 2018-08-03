const translate = require('google-translate-api')
module.exports = (client, message, nt) => {
  if (nt.parameters[0] && nt.parameters[1]) {
    translate(nt.parameters[1], {to: nt.parameters[0]}).then(res => {
      message.channel.send({embed: {
        color: 16761035,
        title: nt.i('translate', true),
        description: '**' + res.from.language.iso + ' to ' + nt.parameters[0] + '**\n\n' + res.text
      }})
    }).catch(error => {
      message.reply(nt.i('invalidResult'))
    })
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
