const DatabasePool = require('../DatabasePool')
const PreferenceIndicator = require('../PreferenceIndicator')

const Drivers = require('./Drivers')

const driverType = PreferenceIndicator.App.AppData.driver.toLowerCase()

const EndPreferenceIndicator = Drivers[driverType].getPreference
const SaveEndPreference = Drivers[driverType].savePreference

module.exports = EndPreferenceIndicator
module.exports.save = SaveEndPreference
