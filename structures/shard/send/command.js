module.exports = (client, command, extra) => {
  client.shard.send({
    type: command,
    content: extra
  })
}
