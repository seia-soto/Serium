const plugins = require('../plugins')

const list = {
  ping: {
    execute: plugins.ping
  },
  arcaea: {
    execute: plugins.arcaea
  }
}

module.exports = list
