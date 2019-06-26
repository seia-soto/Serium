const command = (client, message, preferences, translations) => {
  message.channel.send(translations.loading).then(loadingMessage => {
    loadingMessage.edit(translations.result.bind({latency: new Date() - loadingMessage.createdTimestamp}))
  })
}
const properties = {
  name: 'ping',
  aliases: ['pong'],

  permission: 'everyone'
}

module.exports.execute = command
module.exports.properties = properties
