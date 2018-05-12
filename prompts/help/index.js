module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const translate = nt.i('help', nt.language)
  message.channel.send({embed: {
    color: 16761035,
    title: translate.title,
    description: translate.description +
    '\n\n:earth_asia: https://seriumium.tk\n:sparkles: https://seriumium.github.io/invite\n:candle: https://github.com/Seriumium\n:bulb: ' + require('../../package.json').version,
    fields: [
      {
        name: nt.i('seriumium', nt.language),
        value: translate.values.seriumium
      },
      {
        name: nt.i('moderations', nt.language),
        value: translate.values.moderations
      },
      {
        name: nt.i('gladsome', nt.language),
        value: translate.values.gladsome
      },
      {
        name: nt.i('images', nt.language),
        value: translate.values.images
      },
      {
        name: nt.i('about', nt.language),
        value: translate.values.about
      }
    ]
  }})
}
