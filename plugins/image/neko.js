const Discord = require('discord.js')
const request = require('request')

let form = {
  url: 'https://nekos.life/api/v2/img/',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium'
  }
}

module.exports = (client, message, data, translate) => {
  if (message.channel.nsfw) {
    form.url += 'lewd'
  } else {
    form.url += 'neko'
  }

  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)
    const result = JSON.parse(body).url

    const embed = new Discord.RichEmbed()
      .setColor(data.application.embed.color)
      .setImage(result)
      .setFooter('Powered by nekos.life')
    message.channel.send({embed})
  }
  request(form, callback)

  form.url = 'https://nekos.life/api/v2/img/'
}
