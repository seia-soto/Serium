const fs = require('fs')
const path = require('path')
const YAML = require('js-yaml')

const package = require('../package')
const index_data = YAML.safeLoad(fs.readFileSync(path.join(__dirname, '../translations/index.yaml')))

let index = data[package.version] || data
let translations = {}

index.forEach(language => {
  const key_data = YAML.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'translations', key)))

  translations[language] = key_data
})

class Translations {
  constructor(language, required) {
    this.language = language || 'en'
    this.required = required || null

    this.context = (this.required) ? translations[this.language][this.required] : translations
  }

  get(source) {
    if (source) {
      return this.context[source]
    } else {
      return this.context
    }
  }

  getRaw() {
    return this.data
  }
  getIndex() {
    return Object.keys(index)
  }
  getVersion() {
    return package.version
  }
}

module.exports = Translations
