module.exports = {
  ping: {
    execute: require('../plugins/general/ping'),
    description: 'Checks application\'s websocket tick.',
    to: '0'
  }
}
