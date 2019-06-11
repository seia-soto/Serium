const fs = require('fs')
const YAML = require('js-yaml')

module.exports.ko = YAML.safeLoad(fs.readFileSync('./ko.yaml'))
