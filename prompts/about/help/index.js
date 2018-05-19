module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const translate = nt.i('help')
  message.channel.send({embed: {
    color: 16761035,
    title: translate.title,
    description: translate.description +
    '\n\n:earth_asia: https://seriumium.tk\n:sparkles: https://seriumium.github.io/invite\n:candle: https://github.com/Seriumium\n:bulb: ' +
    require('../../../package.json').version + '\n:tophat: https://goo.gl/forms/xRF686tSyanEZSBy1',
    fields: [
      {
        name: nt.i('seriumium'),
        value: translate.values.seriumium
      },
      {
        name: nt.i('moderations'),
        value: translate.values.moderations
      },
      {
        name: nt.i('gladsome'),
        value: translate.values.gladsome
      },
      {
        name: nt.i('images'),
        value: translate.values.images
      },
      {
        name: nt.i('about'),
        value: translate.values.about
      }
    ]
  }})
}
