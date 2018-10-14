console.log('Starting up at', new Date())
process.title = `Serium v${require('./package.json').version}, ${process.platform}-${process.arch}`

const Discord = require('discord.js')
const Sequelize = require('sequelize')

const scopes = require('./scopes')
const structures = require('./structures')

process.on('unhandledRejection', detail => {
  if (!detailed) detail = 'No detail provided.'
  console.log('UnhandledRejection:', detail)
})

const client = new Discord.Client(scopes.properties.client.options)
client.login(scopes.properties.client.token)

client.on('ready', () => {
  console.log('Connected to Discord at', new Date())
})
client.on('message', message => {
  const data = structures.messageParser(message)
})
