module.exports = (client, message, data, translate) => {
  const numberic = data.message.index.raw.slice(1).join(' ')

  const evaluations = [
    (numberic >= 1),
    (numberic <= 100),
    (!data.guild.permissions.manage)
  ]
  if (evaluations.includes(false)) return message.channel.send(translate.purge.errors[evaluations.indexOf(false)])

  message.delete()
  message.channel.bulkDelete(numberic)
    .then(messages => {
      message.reply(messages.size + translate.purge.done)
        .then(result => {
          setTimeout(() => {
            result.delete()
          }, 3000)
        })
    })
}
