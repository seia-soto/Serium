const languages = {
    ko: require('./indexed/ko'),
    en: require('./indexed/en')
}
const translations = (i) => {
  return languages[i]
}

module.exports = translations
