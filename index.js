console.log('Starting up at ' + new Date())
process.title = `Serium v${require('./package.json').version}, ${process.platform}-${process.arch}`

process.on('unhandledRejection', detailed => {
  if (!detailed) detailed = 'No detail provided.'
  console.log('UnhandledRejection:', detailed)
})

const Discord = require('discord.js')
const Events = require('events')
const fs = require('fs')

const callbacks = require('./callbacks')
const extensions = require('./extensions')
const plugins = require('./plugins')
const scopes = require('./scopes')
const structures = require('./structures')
const translations = require('./translations')

const data = new Events.EventEmitter()
const client = new Discord.Client(scopes.properties.client.options)

let assets = {
  users: JSON.parse(fs.readFileSync('./assets/users.json', 'utf8')),
  guilds: JSON.parse(fs.readFileSync('./assets/guilds.json', 'utf8')),

  thirdparties: {
    usageLogger: {
      usage: JSON.parse(fs.readFileSync('./assets/thirdparties/usageLogger/usage.json', 'utf8'))
    }
  },

  handle: data
}

data.on('modified', (which, input) => {
  fs.writeFile(`./assets/${which}.json`, JSON.stringify(input), 'utf8', callbacks.fs.writeFile)
  assets[which] = input
})

client.login(scopes.properties.client.token)
client.on('ready', () => {
  console.log('Connected to Discord at ' + new Date())

  client.user.setPresence(scopes.properties.client.presence)
})
client.on('message', message => {
  const options = {
    assets: assets,
    application: scopes.properties,
    guild: structures.construct.guild(client, message),
    message: structures.construct.message(message),
    user: structures.construct.user(message, assets),
    permissions: structures.construct.permissions(message)
  }
  const enviroment =
    (message.author.bot) ||
    (!message.content.startsWith(scopes.properties.application.prefix)) ||
    (!options.message.construct) ||
    (!options.guild.permissions.messages.write) ||
    (!plugins[options.message.construct])
  if (enviroment) return

  let translate = translations(options.user.language)
  let plugin = plugins[options.message.construct]

  const evaluation = [
    (message.channel.type === 'text'),
    ((options.permissions & scopes.properties.application.permissions[plugin.permissions]) === scopes.properties.application.permissions[plugin.permissions])
  ]
  if (evaluation.includes(false)) return message.reply(translate.generic.errors.evaluation[evaluation.indexOf(false)])

  message.channel.startTyping()
  extensions.fetch(client, message, options)
  plugin.execute(client, message, options, translate)
  message.channel.stopTyping()
})

client.on('guildMemberAdd', member => {
  if (!assets.guilds[member.guild.id]) return
  const disabled =
    (!assets.guilds[member.guild.id].welcome) ||
    (!client.channels.get(assets.guilds[member.guild.id].welcome.channel).permissionsFor(member.guild.client.user).has('SEND_MESSAGES'))
  if (disabled) return

  const welcome = assets.guilds[member.guild.id].welcome.message
    .replace(/{member}/, member)
    .replace(/{server}/, member.guild.name)
  client.channels.get(assets.guilds[member.guild.id].welcome.channel).send(welcome)
})
