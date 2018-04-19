console.log(`Starting up: ${new Date()}`)
const Discord = require(`discord.js`)
const Fs = require(`fs`)

let finder = require(`./handlers/finder.js`)

let client = new Discord.Client()
client.promptList = new Discord.Collection()
let recentlyExecuted = new Set()
let accesspoints = {
  Discord: process.env.Discord,
  Prefix: `;`
}

Fs.readdir(`./prompts/`, (error, prompts) => {
  if (error) console.error(error)
  prompts.forEach(prompts => {
    let base = require(`./prompts/${prompts}`)
    base.options.interprete.forEach(alias => {
      client.promptList.set(alias, base)
    })
  })
})

client.login(accesspoints.Discord)
client.destroy().then(() => client.login(accesspoints.Discord))

client.on(`ready`, () => {
  console.log(`Connected to Discord (${client.user.tag}): ${new Date()}`)
  console.log(`Loaded: ${client.guilds.size} guilds, ${client.channels.size} channels, ${client.users.size} users`)
  client.user.setActivity(`;help`)
  client.user.setStatus(`idle`)
})
client.on(`message`, async (message) => {
  if (message.author.bot || message.channel.type === `dm`) return
  if (recentlyExecuted.has(message.author.id)) {
    message.reply(`You have to wait for 1.5 sec to use prompts`)
    return
  }
  if (!message.content.startsWith(accesspoints.Prefix)) return
  let presets = {
    default: require(`./default.js`),
    name: message.content.split(` `)[0].slice(accesspoints.Prefix.length),
    arguments: message.content.split(` `).slice(1)
  }
  if (client.promptList.get(presets.name)) {
    let prompt = client.promptList.get(presets.name)
    prompt.execute(client, message, presets)
    recentlyExecuted.add(message.author.id)
    let refresh = () => { recentlyExecuted.delete(message.author.id) }
    let delay = 1500
    setTimeout(refresh, delay)
  }
})
