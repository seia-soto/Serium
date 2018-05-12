const translations = require('./library/ko.json')
const indexed = (sentence) => {
  return translations[sentence]
}

module.exports = indexed
