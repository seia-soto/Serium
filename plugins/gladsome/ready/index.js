module.exports = (client, message, nt) => {
  message.reply(nt.i('readyPlayer').replace('{name}', message.author.username))
}
