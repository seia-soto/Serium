const Discord = require('discord.js')

const structures = require('./structures')
const config = require('./config')

const client = new Discord.Client()

client.on('ready', () => {
  structures.shard.send.message(client, `Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login(config.app.token)
