const DatabasePool = require('../DatabasePool')
const PreferenceIndicator = require('../PreferenceIndicator')

const driverType = PreferenceIndicator.App.AppData.driver.toLowerCase()

const Drivers = require(`./Drivers/${driverType}`)

const EndPreferenceIndicator = Drivers.getPreference
const SaveEndPreference = Drivers.savePreference

module.exports = EndPreferenceIndicator
module.exports.save = SaveEndPreference
