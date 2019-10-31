const Discord = require('discord.js')

const handlers = require('./handlers')
const config = require('./config')

String.prototype.bind = function (parameters) {
  let text = this
  const keys = text.match(/\{(.*?)\}/g)

  if (!keys) return this

  keys.forEach(key => {
    const keyname = key.replace('{', '').replace('}', '')

    text = text.replace(key, String(parameters[keyname]) || '')
  })

  return text
}

const client = new Discord.Client(config.app.client)

client.once('ready', () => {
  console.log(`[Client] Logged in as ${client.user.tag}`)

  client.on('message', handlers.message.bind(null, client))
})

client.login(config.app.token)
