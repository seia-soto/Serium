const fs = require('fs')
const path = require('path')
const YAML = require('js-yaml')

const rawdata = fs.readFileSync(path.join(__dirname, '../preference.yaml'))

const PreferenceIndicator = YAML.safeLoad(rawdata)

module.exports = PreferenceIndicator
