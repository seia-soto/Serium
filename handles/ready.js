const package = require('../package')

const OnReady = client => {
  const title = `${package.name} v${package.version}`

  process.title = title
  console.log(`Started up ${title}. (Identified as ${client.user.id})`)
}

module.exports = OnReady
