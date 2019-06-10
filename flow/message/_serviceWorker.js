const tasks = require('./')

const _serviceWorker = dataObject => {
  Object.values(tasks).forEach(task => {
    task(dataObject)
  })
}

module.exports = _serviceWorker
