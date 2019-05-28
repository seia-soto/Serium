const PreferenceIndicator = require('./PreferenceIndicator')

const PresenceHandler = (client, todo) => {
  client.user.setPresence({
    game: {
      name: todo || '흐암... 방금 일어나써여!'
    },
    status: 'online'
  })
}
const IntervalIndicator = (client, interval) => {
  setInterval(() => {
    PresenceHandler(
      client,
      'se help | ' +
      PreferenceIndicator.App.Externals.PresenceLines[Math.floor((Math.random() * PreferenceIndicator.App.Externals.PresenceLines.length))]
    )
  }, interval)
}

module.exports = PresenceHandler
module.exports.createInterval = IntervalIndicator
