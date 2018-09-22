module.exports = {
  ping: {
    executable: require('../commands/general/ping'),
    description: 'Checks application\'s websocket tick.',
    to: '@everyone'
  }
}
