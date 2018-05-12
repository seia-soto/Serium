const translations = require('./library/en.json')
const indexed = (sentence) => {
  return translations[sentence]
}

module.exports = indexed
