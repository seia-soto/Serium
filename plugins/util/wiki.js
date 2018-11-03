const request = require('request')

const form = {
  url: 'https://arcaea.lowiro.com/en/song_rank',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium (v2)'
  }
}
const endpoints = {
  ko: 'https://ko.wikipedia.org/api/rest_v1/page/summary/',
  en: 'https://en.wikipedia.org/api/rest_v1/page/summary/'
}

module.exports = (client, message, data, translate) => {
  if (!data.message.index.diff.slice(0).join(' ')) return message.reply(translate.wiki.nokeyword)
  const endpoint = endpoints[data.user.language] + encodeURIComponent(data.message.index.diff.slice(0).join(' '))

  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)
    const queried = decodeURIComponent(JSON.parse(body))

    message.channel.send({embed: {
      color: data.application.embed.color,
      title: `${translate.wiki.title}; ${data.message.index.diff.slice(0).join(' ')}`,
      description: queried.extract,
      footer: {
        text: translate.wiki.language
      }
    }})
  }
  request(form, callback)
}
