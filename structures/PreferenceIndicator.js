const fs = require('fs')
const path = require('path')
const YAML = require('js-yaml')

let rawdata = fs.readFileSync(path.join(__dirname, '../preference.yaml'))

let PreferenceIndicator = YAML.safeLoad(rawdata)

PreferenceIndicator.App.Externals.for.forEach(External => {
  rawdata = fs.readFileSync(path.join(__dirname, `../${PreferenceIndicator.App.Externals.root}/${External}.${PreferenceIndicator.App.Externals.extension}`))

  // NOTE: Load `root` key from external YAML preference file.
  PreferenceIndicator.App.Externals[External] = YAML.safeLoad(rawdata).root
})

module.exports = PreferenceIndicator
