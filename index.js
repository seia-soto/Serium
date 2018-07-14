console.log('Starting up at ' + new Date())
const Discord = require('discord.js')

const application = {
  plugins: require('./plugins'),
  stores: require('./stores'),
  structures: require('./structures')
}
const client = new Discord.Client({
  autoReconnect: true,
  disableEveryone: true,
  messageCacheMaxSize: 256,
  messageCacheLifetime: 16,
  messageSweepInterval: 2
})
const configures = require('./stores').configures
const issued = []
const rate = {
  issue: (user) => {
    issued.push(user.id)
  },
  initialize: (user) => {
    issued.splice(issued.indexOf(user.id), 1)
  }
}

process.on('unhandledRejection', (error) => {
  console.error(error.stack)
})

client.login(configures.secret.Discord)
client.on('ready', () => {
  console.log(client.user.tag)
  client.user.setActivity(configures.answer.prefix + 'help (' +
    configures.answer.limit + 'ms/prompt, ' +
    require('./package.json').version + ')')
  client.user.setStatus('online')
})
client.on('message', (message) => {
  const invalidEnviroments =
    (message.author.bot)
    || (message.channel.type !== 'text')
    || (!message.content.startsWith(configures.answer.prefix))
  if (invalidEnviroments) return
  if (message.member.permissions.has('MANAGE_GUILD')) { permissions = 2 } else { permissions = 0 }
  if (message.author.id === '324541397988409355') permissions = 4
  const plugin = application.plugins.answerList[message.content.split(' ')[0].slice(configures.answer.prefix.length).toLowerCase()]
  const notAllowed =
    (!plugin)
    || (permissions < plugin.worker.permissions)
    || (issued.indexOf(message.author.id).toString() !== '-1')
  if (notAllowed) return
  const nt = {
    arguments: message.content.split(' ').slice(1),
    i: application.structures.translations(plugin.language)
  }
  plugin.worker.execute(client, message, nt)
  rate.issue(message.author)
  setTimeout(() => { rate.initialize(message.author) }, configures.answer.limit)
})
