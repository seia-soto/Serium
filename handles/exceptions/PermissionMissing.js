module.exports = message => {
  message.author.reply('Cannot send message into channel you requested command, plesae confirm.')
    .catch(error => null)
}
