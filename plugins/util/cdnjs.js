const request = require('request')

const form = {
  url: 'https://api.cdnjs.com/libraries/',
  headers: {
    'User-Agent': 'Seia-Deployment/Serium'
  }
}

module.exports = (client, message, data, translate) => {
  form.url += encodeURIComponent(data.message.index.diff.slice(0).join(' '))

  const callback = (error, response, body) => {
    if (error && response.statusCode !== 200) return message.reply(form.url + translate.generic.errors.request)

    if (body === '{}') return message.reply(translate.cdnjs.noresult)
    const i = JSON.parse(body)

    message.channel.send({embed: {
      color: data.application.embed.color,
      title: i.namespace,
      descriptions: i.descriptions,
      url: i.homepage,
      author: {
        name: i.author.name
      },
      fields: [
        {
          name: translate.cdnjs.version,
          value: i.version
        },
        {
          name: translate.cdnjs.description,
          value: i.description
        },
        {
          name: translate.cdnjs.repository,
          value: `${i.repository.type} (${i.license}), ${i.repository.url}`
        },
        {
          name: translate.cdnjs.keywords,
          value: i.keywords.join(', ')
        }
      ],
      footer: {
        text: 'Powered by CDNJS.'
      }
    }})
  }
  request(form, callback)
  form.url = 'https://api.cdnjs.com/libraries/'
}
