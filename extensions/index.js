const extensions = Object.values({
  usageLogger: require('./usageLogger')
})

module.exports.fetch = (client, message, options) => {
  extensions.forEach(extension => extension(client, message, options))
}
