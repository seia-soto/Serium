module.exports = message => {
  const template = {
    raw: message.content,
    index: {
      raw: message.content.split(' '),
      diff: message.content.split(' ').shift()
    },
    prefix: message.content.substr(0, 1),
    construct: message.content.split(' ')[0].toLowerCase().replace('b;', '')
  }
  return template
}
