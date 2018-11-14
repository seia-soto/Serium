const Discord = require('discord.js')
const request = require('request')

let form = {
  url: 'wikipedia.org/api/rest_v1/page/summary',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium'
  }
}
const endpoint = 'wikipedia.org/api/rest_v1/page/summary'

module.exports = (client, message, data, translate) => {
  if (!data.message.index.diff.slice(0).join(' ')) return message.reply(translate.wiki.nokeyword)

  const keyword = encodeURIComponent(data.message.index.diff.slice(0).join(' '))
  form.url = `https://${data.user.language}.${endpoint}/${keyword}`

  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)
    let queried = JSON.parse(body)

    if (!queried.originalimage) queried.originalimage = { source: '' }

    const embed = new Discord.RichEmbed()
      .setColor(data.application.embed.color)
      .setTitle(`${translate.wiki.title}; ${data.message.index.diff.slice(0).join(' ')}`)
      .setThumbnail(queried.originalimage.source)

      .setDescription(`${queried.extract || translate.wiki.nocontext} [...](https://${data.user.language}.wikipedia.org/wiki/${keyword})`)
      .setFooter(
        translate.wiki.language,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wikipedia-logo-v2-200px-transparent.png/140px-Wikipedia-logo-v2-200px-transparent.png'
      )
    message.channel.send(embed)
  }
  request(form, callback)
}
