module.exports = message => {
  const template = {
    raw: message.content,
    data: {
      index: {
        raw: message.content.split(' '),
        diff: template.body.data.index.raw.shift()
      },
      starter: message.content.substr(0, 1),
      prefix: template.body.data.index.raw[0].replace(';')
    }
  }
  return template
}
