const PreferenceIndicator = require('./PreferenceIndicator')
const RequestHandler = require('./RequestHandler')

const types = PreferenceIndicator.App.Externals.NekosLifeAPIRoutes
const baseURI = 'https://nekos.life/api/v2'

const NekosLifeAPIParser = type => {
  return new Promise((resolve, reject) => {
    const requestURI = `${baseURI}/img/${type}`

    RequestHandler(requestURI).then(rawdata => {
      const url = JSON.parse(rawdata).url

      resolve(url)
    }).catch(rejection => {
      console.error(rejection)

      reject('NekosLifeAPIParser: Could not parse URL: ', rejection)
    })
  })
}


module.exports = NekosLifeAPIParser
