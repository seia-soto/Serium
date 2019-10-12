module.exports.execute = (client, message, opts) => {
  return message.channel.send(opts.translations.pong.bind({
    responseTime: Math.round(client.ping)
  }))
}
module.exports.properties = {
  name: 'ping',
  permission: 'dev',
  aliases: ['pong']
}
