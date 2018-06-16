module.exports = (request) => {
  const results = {
    rock: {
      paper: false,
      scissors: true
    },
    paper: {
      rock: true,
      scissors: false
    },
    scissors: {
      rock: false,
      paper: true
    }
  }
  const responses = ['rock', 'paper', 'scissors']
  const picked = responses[Math.floor(Math.random() * responses.length)]
  let result = results[request][picked]
  if (request === picked) {
    result = 'draw'
  }
  let evaluated = {
    result: result,
    picked: picked
  }
  return evaluated
}
