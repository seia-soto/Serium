module.exports.permissions = 3
module.exports.execute = (client, message, nt) => {
  if (!message.author.id === '324541397988409355') return
  const request = nt.arguments.slice(0).join(' ')
  const result = new Promise((resolve, reject) => resolve(eval(request)))

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, {
      depth: 0
    })
    if (output.includes(client.token)) output = output.replace(client.token, '(accesstoken was hidden)')
    if (output.length > 1990) console.log(output), output = 'Too long to be printed (content got console logged)'

    return message.channel.send(output, {code: 'JavaScript'})
  }).catch(error => {
    console.error(error)
    error = error.toString()

    if (error.includes(client.token)) error = error.replace(client.token, '(accesstoken was hidden)')

    return message.channel.send(error, {code: 'JavaScript'})
  })
}
