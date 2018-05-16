const evaluate = require('./rps.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
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
  const request = list[nt.arguments[0]]
  if (!request) {
    message.reply(nt.i('invalidParameter'))
    return
  }
  const results = {
    true: translate.won,
    false: translate.lose,
    draw: translate.draw
  }
  const evaluated = evaluate(request)
  message.channel.send({embed: {
    color: 16761035,
    title: translate.title,
    description: '**' + translate.picked.bot + '** ' + evaluated.picked +
    '\n**' + translate.picked.user + '** ' + request +
    '\n\n**' + results[evaluated.result] + '** '
  }})
}
