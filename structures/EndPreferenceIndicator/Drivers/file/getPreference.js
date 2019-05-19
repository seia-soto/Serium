const fs = require('fs')
const path = require('path')

const defaultPreference = {
  'prompt.palette': false,
  'guildMemberAdd.verifyCaptcha': false
}
const defaultDatasetDirectory = path.join(__dirname, '../../../../assets/data')

const EndPreferenceIndicator = identify => {
  return new Promise((resolve, reject) => {
    try {
      const preferencePath = path.join(defaultDatasetDirectory, `${identify}.json`)

      if (fs.existsSync(preferencePath)) {
        resolve(JSON.parse(fs.readFileSync(preferencePath)))
      } else {
        fs.writeFileSync(preferencePath, JSON.stringify(defaultPreference), 'utf8')

        resolve(defaultPreference)
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = EndPreferenceIndicator
