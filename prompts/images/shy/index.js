const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const images = [
    'https://raw.githubusercontent.com/Seriumium/seriumium.github.io/master/cdn/seriumium/shy/1.gif',
    'https://raw.githubusercontent.com/Seriumium/seriumium.github.io/master/cdn/seriumium/shy/2.gif'
  ]
  const embed = new Discord.RichEmbed()
    .setTitle(nt.i('shy'))
    .setColor(16761035)
    .setImage(images[Math.floor(Math.random() * images.length)])
  message.channel.send({embed})
}
