const languages = {
    ko: require('./indexed/ko'),
    en: require('./indexed/en')
}
module.exports = (i) => {
  return languages[i]
}
