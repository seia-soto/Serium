console.log('Starting up at', new Date())
process.title = `Serium v${require('./package.json').version}, ${process.platform}-${process.arch}`

const Discord = require('discord.js')
const Sequelize = require('sequelize')

const io = require('./functions')
const scopes = require('./scopes')

process.on('unhandledRejection', detail => {
  if (!detailed) detail = 'No detail provided.'
  console.log('UnhandledRejection:', detail)
})

const database = {
  stream: io.stream.create(Sequelize, '../../assets/default.db'),
  models: require('./functions/stream/models')
}
database.models.sequelize.sync()

const client = new Discord.Client(scopes.properties.client.options)
client.login(scopes.properties.client.token)

client.on('ready', () => {
  console.log('Connected to Discord at', new Date())
})
client.on('message', message => {
  const indexed = message.content.split(' ')
  const prompt = scopes.prompts[indexed[0].replace(';', '')]
})
