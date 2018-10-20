const cheerio = require('cheerio')
const request = require('request')

const form = {
  url: 'https://arcaea.lowiro.com/en/song_rank',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium (v2)'
  }
}

module.exports = (client, message, data, translate) => {
  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)
    let rank = []
    const $ = cheerio.load(body)
    $('.rank-song-in').each((i, element) => {
      const querySelector = cheerio.load(element)
      rank[i] = {
        name: `${(i + 1).toString()}${translate.arcaea.ranked}, ${querySelector('div .rank-title').text().replace(/(  +|\n)/g, ' ')}`,
        value: `${querySelector('div .rank-composer').text().replace(/(  +|\n)/g, ' ')}${translate.arcaea.artist}`
      }
    })

    message.channel.send({embed: {
      color: data.application.embed.color,
      author: {
        name: translate.arcaea.title
      },
      title: translate.arcaea.uri,
      url: 'https://arcaea.lowiro.com/en/song_rank',
      fields: rank.splice(0, 5),
      timestamp: new Date(),
      footer: {
        text: 'Copyright 2017-2018 lowiro'
      }
    }})
  }
  request(form, callback)
}
