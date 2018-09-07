console.log('Starting up at ' + new Date())
const application = require('./application')

const redis = require('redis')
const cache = redis.createClient()

cache.on('error', error => {
  console.log('Error (redis):', error)
})
cache.set('properties', application.properties)
