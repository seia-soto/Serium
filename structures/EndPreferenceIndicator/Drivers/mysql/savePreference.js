const DatabasePool = require('@structures/DatabasePool')

const SaveEndPreference = (identify, data) => {
  return new Promise((resolve, reject) => {
    DatabasePool.getConnection((connectionError, connection) => {
      if (connectionError) reject(connectionError)

      connection.query(`UPDATE serium_servers SET preference = '${JSON.stringify(data).replace(/\'/g, '\'')}' WHERE identify = ${identify}`, (queryError, results) => {
        if (queryError) reject(queryError)

        connection.release()
        resolve()
      })
    })
  })
}

module.exports = SaveEndPreference
