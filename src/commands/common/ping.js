const command = (client, message, preferences, translations) => {
  message.channel.send(translations.loading).then(loadingMessage => {
    loadingMessage.edit(translations.result.bind({latency: new Date() - loadingMessage.createdTimestamp}))
  })
}
const properties = {
  name: 'ping',
  aliases: ['pong'],

  permission: 'everyone',

  /*
  // NOTE: When you add a special selectable feature property to this.

  special: true,
  precondition: function() or just leave as `undefined`.
  // NOTE: This function need to return message property to send what required. Also this function will inherit translations of user's language.
  */
}

module.exports.execute = command
module.exports.properties = properties
