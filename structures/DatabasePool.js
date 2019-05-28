const mysql = require('mysql')
const PreferenceIndicator = require('./PreferenceIndicator')

let pool = mysql.createPool(PreferenceIndicator.App.Externals.DatabasePool)

module.exports = pool
