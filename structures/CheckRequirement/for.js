const EndPreferenceIndicator = require('../EndPreferenceIndicator')

const events = require('./events')
const prompts = require('./prompts')

Object.keys(EndPreferenceIndicator.namespaces).forEach(preferenceName => { // NOTE: Get the key of prompts and events' state from database.
  if (preferenceName.startsWith('prompt.')) { // NOTE: If key property is `prompt`.
    module.exports[preferenceName] = prompts[preferenceName.replace('prompt.', '')] // NOTE: Define module as `prompt` the `key`.
  } else {
    const keys = preferenceName.split('.') // NOTE: If not `prompt` thing.

    module.exports[preferenceName] = events[keys[0]][keys[1]] // NOTE: Define module as its own property.
  }
})
