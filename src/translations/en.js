module.exports = {
  categories: {
    common: 'Common'
  },
  commands: {
    ping: {
      _properties: {
        description: 'Check latency to Discord server.',
        usage: 'ping'
      },
      loading: 'Loading...',
      result: 'Pong! Took {latency}ms.'
    }
  },
  events: {
    message: {
      unsupportedChannel: '{type} is unsupported channel.',
      leakedPermission: 'I do not have permission to send message to {channel}. Please ask server administrator for permission.',
      scarcePermission: 'You do not have permission to use {command}.',
      coolingDown: 'Please wait. You can use command every {seconds} seconds.'
    }
  },
  common: {
    category: 'Category'
  }
}
