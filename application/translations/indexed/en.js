const translations = require('./library/en.json')
module.exports = (sentence, charset) => {
  const string = translations[sentence]
  if (charset) {
    return string.substr(0, 1).toUpperCase() + string.substr(1)
  }
  return string
}
