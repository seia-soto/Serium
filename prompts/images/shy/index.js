const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const identificate = Math.floor(Math.random() * 4) + 1
  const embed = new Discord.RichEmbed()
    .setTitle(nt.i('shy'))
    .setColor(16761035)
    .setImage('https://raw.githubusercontent.com/Seriumium/seriumium.github.io/master/cdn/seriumium/shy/' + identificate + '.gif')
  message.channel.send({embed})
}
