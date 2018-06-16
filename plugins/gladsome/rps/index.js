const evaluate = require('./rps.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0]) {
    const translate = nt.i('rps')
    const list = {
      rock: 'rock',
      paper: 'paper',
      scissors: 'scissors',
      r: 'rock',
      p: 'paper',
      s: 'scissors',
      '바위': 'rock',
      '보': 'paper',
      '가위': 'scissors',
      '주먹': 'rock'
    }
    const request = list[nt.arguments[0].toLowerCase()]
    if (!request) {
      message.reply(nt.i('invalidParameter'))
      return
    }
    const results = {
      true: nt.i('wonGame'),
      false: nt.i('loseGame'),
      draw: nt.i('drawGame')
    }
    const evaluated = evaluate(request)
    message.channel.send({embed: {
      color: 16761035,
      title: nt.i('rps', true),
      description: '**' + nt.i('botPicked') + '** ' + evaluated.picked +
      '\n**' + nt.i('userPicked').replace('{name}', message.author.username) + '** ' + request +
      '\n\n**' + results[evaluated.result] + '** '
    }})
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
