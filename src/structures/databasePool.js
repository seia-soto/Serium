const mysql = require('mysql2/promise')

const preferences = require('../preferences')

const pool = mysql.createPool(preferences.database.options)

module.exports = pool
