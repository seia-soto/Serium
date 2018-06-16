const translations = require('./library/ko.json')
module.exports = (sentence) => {
  return translations[sentence]
}
