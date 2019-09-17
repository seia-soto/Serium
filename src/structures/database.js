const mysql = require('mysql2/promise')

const preferences = require('../preferences')

const pool = mysql.createPool(preferences.database.options)

const query = async (sql, bind) => {
  const result = await {}

  result.error = 0

  try {
    result.data = await pool.execute(sql, bind)[0] || null
  } catch (error) {
    result.error = await 1
    result.error.message = error
  }

  return result
}

module.exports = pool
module.exports.query = query
