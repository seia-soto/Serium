const Discord = require('discord.js')

module.exports = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setAuthor('Seia-Soto', 'https://avatars0.githubusercontent.com/u/30369714')
    .setThumbnail('https://cdn.discordapp.com/avatars/429913480708096000/eb16d4c2d15d841d70ac0abe25f850fc.png')

    .addField('Version', 'v2b02@2018-11-11', true)
    .addField('Credits', 'Copyright 2018 Seia with contributors. All rights reserved.', true)
  message.channel.send({embed})
}
