module.exports = (message, assets) => {
  const template = {
    language: 'en'
  }
  return assets[message.author.id] || template
}
