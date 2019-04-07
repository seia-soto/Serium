module.exports = message => {
  message.reply('Permission is not enough to use this command.')
    .catch(error => null)
}
