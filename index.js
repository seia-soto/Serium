console.log('Starting up at ' + new Date())
const Discord = require('discord.js')

const application = {
  plugins: require('./plugins'),
  stores: require('./stores'),
  structures: require('./structures')
}
const client = new Discord.Client({autoReconnect: true})
const endpoints = {
  prefix: ';', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: '' // NOTE: process.env.Discord
}

process.on('unhandledRejection', (error) => {
  console.error(error.stack)
})

client.login(endpoints.Discord)
client.on('ready', () => {
  console.log(client.user.tag)
  client.user.setActivity(endpoints.prefix + 'help (Initialized, ' + require('./package.json').version + ')')
  client.user.setStatus('online')
})
client.on('message', (message) => {
  const notAllowedEnviroments =
    (message.author.bot)
    || (message.channel.type === 'dm')
    || (!message.content.startsWith(endpoints.prefix))
  if (notAllowedEnviroments) { return }
  if (message.member.permissions.has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
  if (message.author.id === '324541397988409355') permissions = 4
  const plugin = application.plugins.answerList[message.content.split(' ')[0].slice(endpoints.prefix.length).toLowerCase()]
  const notAllowed =
    (!plugin)
    || (permissions < plugin.worker.permissions)
  if (notAllowed) { return }
  const nt = {
    arguments: message.content.split(' ').slice(1),
    i: application.structures.translations(plugin.language),
    application: application
  }
  plugin.worker.execute(client, message, nt)
})
