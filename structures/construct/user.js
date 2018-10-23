module.exports = (message, assets) => {
  const template = {
    language: 'en'
  }
  return assets.users[message.author.id] || template
}
