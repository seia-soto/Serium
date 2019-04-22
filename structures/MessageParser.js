const PreferenceIndicator = require('./PreferenceIndicator')

const MessageParser = message => {
  message._se = {
    // NOTE: Prototype construction.
  }

  message._se.filter = message.content.toLowerCase().replace(PreferenceIndicator.App.Prefix, '').split(' ')
  message._se.data = message._se.filter.slice(1)

  message._se.prompt = message._se.filter[0]

  return message
}

module.exports = MessageParser
