const request = require('request')
const ytdl = require('ytdl-core')

const { voice } = require('../../structures/functions')

module.exports = (client, message, data, translate) => {
  let query = data.message.index.diff.slice(0).join(' ')

  const evaluations = [
    (query),
    (message.member.voiceChannel)
  ]
  if (evaluations.includes(false)) return message.reply(translate.play.errors[evaluation.indexOf(false)])

  const Party = new voice(message.guild.id, message.member.voiceChannel)

  if (!ytdl.validateURL(query)) {
    const form = {
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${data.application.thridparty.youtube}&q=${query}`,
      headers: {
        'User-Agent': 'Seia-Deployment/Serium'
      }
    }

    request(form, (error, response, body) => {
      const tables = JSON.parse(body)

      if (!tables.items) return message.reply(translate.play.errors[2])
      query = tables.items[0].videoURL
    })
  }

  Party.addQueue(message.guild.id, query)
  message.channel.send({embed: {
    color: data.application.embed.color,
    author: {
      name: translate.play.title
    },
    description: 'Playing... (We are preparing functions for music!)'
  }})
  Party.start(message.guild.id)
}
