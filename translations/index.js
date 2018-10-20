const library = {
  ko: require('./library/ko'),
  en: require('./library/en')
}

module.exports = (language) => {
  return library[language]
}

module.exports.library = library
module.exports.contributors = {
  ko: 'Seia#0002;324541397988409355',
  en: 'Seia#0002;324541397988409355'
}
