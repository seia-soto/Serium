const mysql = require('mysql')

const PreferenceIndicator = require('./PreferenceIndicator')

const pool = mysql.createPool(PreferenceIndicator.App.Externals.DatabasePool)

module.exports = pool
