const Discord = require('discord.js')
const request = require('request')

const form = {
  url: 'https://api.thecatapi.com/api/images/get?format=json&results_per_page=1',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium'
  }
}

module.exports = (client, message, data, translate) => {
  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)
    const result = JSON.parse(body)[0].url

    const embed = new Discord.RichEmbed()
      .setColor(data.application.embed.color)
      .setImage(result)
      .setFooter('Powered by thecatapi')
    message.channel.send({embed})
  }
  request(form, callback)
}
