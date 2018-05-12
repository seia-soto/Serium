const languages = {
  ko: require('./library/ko.json'),
  en: require('./library/en.json')
}
const translations = (sentence, i) => {
  return languages[i][sentence]
}

module.exports = translations
