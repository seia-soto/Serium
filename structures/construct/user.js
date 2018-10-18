module.exports = (message, assets) => {
  const template = {
    language: 'ko'
  }
  return assets[message.author.id] || template
}
