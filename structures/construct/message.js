const properties = require('../../scopes/properties')

module.exports = message => {
  const template = {
    raw: message.content,
    index: {
      raw: message.content.split(' '),
      diff: message.content.split(' ').slice(1)
    },
    prefix: message.content.substr(0, 1),
    construct: message.content.split(' ')[0].toLowerCase().replace(properties.application.prefix, '')
  }
  return template
}
