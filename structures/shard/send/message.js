module.exports = (client, message) => {
  client.shard.send({
    type: 'debug',
    content: message
  })
}
