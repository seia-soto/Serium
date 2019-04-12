const package = require('../package')

const structures = require('../structures')

const {PresenceHandler} = structures

const OnReady = client => {
  const title = `${package.name} v${package.version}`

  process.title = title
  console.log(`Started up ${title}. (Identified as ${client.user.id})`)

  PresenceHandler(client)
  PresenceHandler.createInterval(client, 1000 * 60 * 15)
}

module.exports = OnReady
