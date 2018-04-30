const { exec } = require('child_process')
module.exports.permissions = 3
module.exports.execute = (client, message, nt) => {
  if (!message.author.id === '324541397988409355') return
  const request = nt.arguments.slice(0).join(' ')

  exec(request, (error, stdout, stderr) => {
    console.log('Attempting to exec handler: ' + request)
    if (error) {
      console.log('An error was printed: ' + error)
      error = error.toString()
      message.channel.send(error, {code: 'bash'})
      return
    }
    if (stdout.includes(client.token)) stdout = stdout.replace(client.token, '(accesstoken was hidden)')
    if (stdout.length > 1990) console.log('Attempted shell prompts: ' + stdout), stdout = 'Too long to be printed (content got console logged)'
    message.channel.send(stdout, {code: 'bash'})
    if (stderr) {
      if (stderr.includes(client.token)) stdout = stderr.replace(client.token, '(accesstoken was hidden)')
      if (stderr.length > 1990) console.log('An error was printed: ' + stderr), stderr = 'Too long to be printed (content got console logged)'
      message.channel.send(stderr, {code: 'bash'})
    }
  })
}
