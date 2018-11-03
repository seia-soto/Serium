module.exports = (client, message, data, translate) => {
  const context = data.message.index.diff.slice(0).join(' ')
  const may = Math.floor(Math.random() * 100) + 1

  message.channel.send(
    translate.if[0] + context + translate.if[1] + may + translate.if[2]
  )
}
