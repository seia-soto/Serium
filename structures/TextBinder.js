const TextBinder = (text, parameters) => {
  if (!text) return ''

  const keys = text.split(' ')
    .filter(context => context)
    .filter(key => key.match(/\{(.*?)\}/)) // NOTE: {key}
    .map(key => key.match(/\{(.*?)\}/)[1]) // NOTE: key
  keys.forEach(key => text = text.replace(`{${key}}`, parameters[key], 'g'))

  return text
}

String.prototype.bind = TextBinder

module.exports = TextBinder
