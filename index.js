console.log(`Starting up: ${new Date()}`)
const Discord = require(`discord.js`)
const Fs = require(`fs`)

const finder = require(`./handlers/finder`)
const initialize = require(`./handlers/initialize`)

const client = new Discord.Client()
const prompts = new Discord.Collection()
const recentlyExecuted = new Set()
const accesspoints = {
  Discord: process.env.Discord,
  Prefix: `;`
}

initialize.prompts(prompts)
client.login(accesspoints.Discord)
client.destroy().then(() => client.login(accesspoints.Discord))

client.on(`ready`, () => {
  console.log(`Connected to Discord (${client.user.tag}): ${new Date()}`)
  console.log(`Loaded: ${client.guilds.size} guilds, ${client.channels.size} channels, ${client.users.size} users`)
  client.user.setActivity(`;help`)
  client.user.setStatus(`idle`)
})
client.on(`message`, async (message) => {
  const permissionAllowed = finder.permissions(message)
  const prompt = prompts.get(message.content.split(` `)[0].slice(accesspoints.Prefix.length))
  const isDenied =
    (message.author.bot)
    || (`dm` === message.channel.type)
    || (!message.content.startsWith(accesspoints.Prefix))
    || (recentlyExecuted.has(message.author.id))
    || (!prompt)
    || (permissionAllowed < prompt.options.permissions)
  if (isDenied) { return }
  const language = await finder.languages(message, accesspoints)
  const presets = {
    default: require(`./index`),
    arguments: message.content.split(` `).slice(1),
    language: require(`./store/i18n/${language}`)
  }
  prompt.execute(client, message, presets)
  recentlyExecuted.add(message.author.id)
  setTimeout(() => { recentlyExecuted.delete(message.author.id) }, 1500)
})
