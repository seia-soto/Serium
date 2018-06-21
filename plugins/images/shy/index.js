const Discord = require('discord.js')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const embed = new Discord.RichEmbed()
    .setTitle('私はあなたを愛しているので、私は恥ずかしがり屋です。。。！')
    .setColor(16761035)
    .setImage('https://seriumium.tk/cdn/images/shy.gif')
  message.channel.send({embed})
}
