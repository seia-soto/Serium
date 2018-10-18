console.log('Starting up at ' + new Date())
process.title = `Serium v${require('./package.json').version}, ${process.platform}-${process.arch}`

process.on('unhandledRejection', detailed => {
  if (!detailed) detailed = 'No detail provided.'
  console.log('UnhandledRejection:', detailed)
})

const Discord = require('discord.js')
const Events = require('events')
const fs = require('fs')

const plugins = require('./plugins')
const scopes = require('./scopes')
const structures = require('./structures')
const translations = require('./translations')

const data = new Events.EventEmitter()
const client = new Discord.Client(scopes.properties.client.options)

let assets = JSON.parse(fs.readFileSync('./assets/users.json', 'utf8'))

data.on('modified', () => {
  assets = JSON.parse(fs.readFileSync('./assets/users.json', 'utf8'))
})

client.login(scopes.properties.client.token)
client.on('ready', () => {
  console.log('Connected to Discord at ' + new Date())
})
client.on('message', message => {
  const data = {
    application: scopes.properties.embed,
    guild: structures.construct.guild(client, message),
    message: structures.construct.message(message),
    user: structures.construct.user(message, assets)
  }
  const enviroment =
    (message.author.bot) ||
    (!message.content.startsWith('b;')) ||
    (!data.message.construct) ||
    (!data.guild.permissions.messages.write)
  const evaluation = [
    (message.channel.type === 'text'),
    (data.message.construct in scopes.dictionary)
  ]
  const translate = translations(data.user.language)

  if (enviroment) return
  if (evaluation.includes(false) === true) return message.channel.send(translate.generic.errors.evaluation[evaluation.indexOf(false)])
  scopes.dictionary[data.message.construct].execute(client, message, data, translate)
})
