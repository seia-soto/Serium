const DatabasePool = require('./DatabasePool')

const defaultGuildPreference = {
  'prompt.palette': false,
  'guildMemberAdd.verifyCaptcha': false
}
const defaultUserPreference = {
  economy: {
    shards: 0,
    lastConfirm: 0
  }
}

const getGuildSettings = identify => {
  return new Promise((resolve, reject) => {
    DatabasePool.getConnection((connectionError, connection) => {
      if (connectionError) reject(connectionError)

      connection.query(`SELECT preference FROM serium_servers WHERE identify = ${identify}`, (queryError, results) => {
        if (queryError) reject(queryError)

        if (results[0]) {
          connection.release()

          resolve(JSON.parse(results[0].preference))
        } else {
          connection.query(`INSERT INTO serium_servers (identify, preference) VALUES ('${identify}', '${JSON.stringify(defaultGuildPreference)}')`, creationError => {
            connection.release()

            if (creationError) {
              reject(creationError)
            } else {
              resolve(defaultGuildPreference)
            }
          })
        }
      })
    })
  })
}
const setGuildSettings = (identify, data) => {
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
const getUserSettings = identify => {
  return new Promise((resolve, reject) => {
    DatabasePool.getConnection((connectionError, connection) => {
      if (connectionError) reject(connectionError)

      connection.query(`SELECT preference FROM serium_users WHERE identify = ${identify}`, (queryError, results) => {
        if (queryError) reject(queryError)

        if (results[0]) {
          connection.release()

          resolve(JSON.parse(results[0].preference))
        } else {
          connection.query(`INSERT INTO serium_users (identify, preference) VALUES ('${identify}', '${JSON.stringify(defaultUserPreference)}')`, creationError => {
            connection.release()

            if (creationError) {
              reject(creationError)
            } else {
              resolve(defaultUserPreference)
            }
          })
        }
      })
    })
  })
}
const setUserSettings = (identify, data) => {
  return new Promise((resolve, reject) => {
    DatabasePool.getConnection((connectionError, connection) => {
      if (connectionError) reject(connectionError)

      connection.query(`UPDATE serium_users SET preference = '${JSON.stringify(data).replace(/\'/g, '\'')}' WHERE identify = ${identify}`, (queryError, results) => {
        connection.release()

        if (queryError) {
          reject(queryError)
        } else {
          resolve()
        }
      })
    })
  })
}

module.exports.getGuildSettings = getGuildSettings
module.exports.setGuildSettings = setGuildSettings
module.exports.getUserSettings = getUserSettings
module.exports.setUserSettings = setUserSettings
