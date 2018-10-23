const Discord = require('discord.js')
const request = require('request')

const form = {
  url: 'https://dog.ceo/api/breeds/image/random',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium (v2)'
  }
}

module.exports = (client, message, data, translate) => {
  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)
    const result = JSON.parse(body).message

    const embed = new Discord.RichEmbed()
      .setColor(data.application.embed.color)
      .setImage(result)
      .setFooter('Powered by Dog API')
    message.channel.send({embed})
  }
  request(form, callback)
}
