const request = require('request')

const PreferenceIndicator = require('./PreferenceIndicator')

const types = PreferenceIndicator.App.Externals.NekosLifeAPIRoutes
const webclient = PreferenceIndicator.App.WebClient
const baseURI = 'https://nekos.life/api/v2'

const TypeIdentifier = type => {
  if (types.indexOf(type) !== -1) {
    return true
  } else {
    return false
  }
}
const RequestHandler = uri => {
  return new Promise((resolve, reject) => {
    let options = {
      url: uri,
      headers: {
        'User-Agent': webclient,
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
const NekosLifeAPIParser = type => {
  return new Promise((resolve, reject) => {
    if (TypeIdentifier(type)) {
      const requestURI = `${baseURI}/img/${type}`

      RequestHandler(requestURI).then(rawdata => {
        const url = JSON.parse(rawdata).url

        resolve(url)
      }).catch(rejection => {
        console.error(rejection)

        reject('NekosLifeAPIParser: Could not parse URL: ', rejection)
      })
    } else {
      reject('NekosLifeAPIParser: Requested type is not acceptable.')
    }
  })
}


module.exports = NekosLifeAPIParser
