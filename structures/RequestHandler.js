const request = require('request')

const PreferenceIndicator = require('./PreferenceIndicator')

const RequestHandler = uri => {
  return new Promise((resolve, reject) => {
    let options = {
      url: uri,
      headers: {
        'User-Agent': PreferenceIndicator.App.WebClient,
        'Upgrade-Insecure-Requests': 1 // NOTE: Add request to upgrade insecure connections.
      }
    }
    request(options, (error, response, body) => {
      if (error) {
        reject(error)
      }

      resolve(body)
    })
  })
}

module.exports = RequestHandler
