const Discord = require('discord.js')
const request = require('request')

const form = {
  url: 'https://itunes.apple.com/search?term=',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium'
  }
}

module.exports = (client, message, data, translate) => {
  form.url += encodeURIComponent(data.message.index.diff.slice(0).join(' '))

  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)

    const i = JSON.parse(body)
    if (i.resultCount === 0) return message.reply(translate.itunes.noresult)

    const out = i.results[0]
    const embed = new Discord.RichEmbed()
      .setColor(data.application.embed.color)
      .setTitle('iTunes')

      .setThumbnail(out.artworkUrl60)
      .addField(translate.itunes.type, `${out.wrapperType}, ${out.kind}`, true)
      .addField(translate.itunes.info,
`
**${translate.itunes.artist}** [${out.artistName}](${out.artistViewUrl})
**${translate.itunes.collection}** [${out.collectionName}](${out.collectionViewUrl})
**${translate.itunes.track}** [${out.trackName}](${out.trackViewUrl})
`
      , true)

      message.channel.send(embed)
  }
  request(form, callback)
  form.url = 'https://itunes.apple.com/search?term='
}
