const DatabasePool = require('../DatabasePool')

const defaultPreference = {
  'prompt.palette': false,
  'guildMemberAdd.verifyCaptcha': false
}
const EndPreferenceIndicator = identify => {
  return new Promise((resolve, reject) => {
    DatabasePool.getConnection((connectionError, connection) => {
      if (connectionError) reject(connectionError)

      connection.query(`SELECT preference FROM serium_servers WHERE identify = ${identify}`, (queryError, results) => {
        if (queryError) reject(queryError)

        if (results[0]) {
          resolve(JSON.parse(results[0].preference))
        } else {
          connection.query(`INSERT INTO serium_servers (identify, preference) VALUES ('${identify}', '${JSON.stringify(defaultPreference)}')`, creationError => {
            if (creationError) {
              reject(creationError)
            } else {
              resolve(defaultPreference)
            }
          })
        }
      })
    })
  })
}

module.exports = EndPreferenceIndicator
