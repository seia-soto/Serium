const library = {
  ko: require('./library/ko')
}

module.exports = (language) => {
  return library[language]
}

module.exports.languages = {
  ko: 'Seia#0002;324541397988409355'
}
