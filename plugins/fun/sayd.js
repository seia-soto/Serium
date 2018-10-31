module.exports = (client, message, data, translate) => {
  const context = data.message.index.diff.slice(0).join(' ')

  message.delete()
  message.channel.send(context)
}
