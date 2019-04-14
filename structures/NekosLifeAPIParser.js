const PreferenceIndicator = require('./PreferenceIndicator')
const RequestHandler = require('./RequestHandler')

const types = PreferenceIndicator.App.Externals.NekosLifeAPIRoutes
const baseURI = 'https://nekos.life/api/v2'

const TypeIdentifier = type => {
  if (types.indexOf(type) !== -1) {
    return true
  } else {
    return false
  }
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
