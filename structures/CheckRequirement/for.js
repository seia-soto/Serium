const EndPreferenceIndicator = require('../EndPreferenceIndicator')

const events = require('./events')
const prompts = require('./prompts')

Object.keys(EndPreferenceIndicator.namespaces).forEach(preferenceName => {
  if (preferenceName.startsWith('prompt.')) {
    module.exports[preferenceName] = prompts[preferenceName.replace('prompt.', '')]
  } else {
    const keys = preferenceName.split('.')

    module.exports[preferenceName] = events[keys[0]][keys[1]]
  }
})
