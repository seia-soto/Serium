const mysql = require('mysql')

const PreferenceIndicator = require('./PreferenceIndicator')

let pool = null

if (PreferenceIndicator.App.AppData.driver.toLowerCase() === 'mysql') {
  pool = mysql.createPool(PreferenceIndicator.App.Externals.DatabasePool)
}

module.exports = pool
