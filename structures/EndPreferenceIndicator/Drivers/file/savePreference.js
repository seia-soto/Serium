const fs = require('fs')
const path = require('path')

const defaultDatasetDirectory = path.join(__dirname, '../../../../asssets/data/')

const SaveEndPreference = (identify, preference) => {
  return new Promise((resolve, reject) => {
    try {
      const preferencePath = `${defaultDatasetDirectory}/${identify}.json`

      fs.writeFileSync(preferencePath, JSON.stringify(preference), 'utf8')
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = SaveEndPreference
