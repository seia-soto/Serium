const library = {
  ko: require('./library/ko'),
  en: require('./library/en')
}

module.exports = (language) => {
  const template = library[language]
  return template
}

module.exports.library = library
module.exports.contributors = {
  ko: 'Seia#0002;324541397988409355',
  en: 'Seia#0002;324541397988409355',
  ja: 'Choux_a_la_Creme#8181;246868596968390657'
}
