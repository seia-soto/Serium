module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.channel.send({embed: {
    color: 16761035,
    title: nt.i('help', true),
    description: nt.i('creatorCredits') +
    '\n\n:earth_asia: https://seriumium.tk\n:sparkles: https://seriumium.github.io/invite\n:candle: https://github.com/Seriumium\n:bulb: ' +
    require('../../../package.json').version + '\n:tophat: https://goo.gl/forms/xRF686tSyanEZSBy1',
    fields: [
      {
        name: nt.i('seriumium'),
        value: nt.i('subjectSeriumium')
      },
      {
        name: nt.i('moderations', true),
        value: nt.i('subjectModerations')
      },
      {
        name: nt.i('gladsome', true),
        value: nt.i('subjectGladsome')
      },
      {
        name: nt.i('images', true),
        value: nt.i('subjectImages')
      },
      {
        name: nt.i('about', true),
        value: nt.i('subjectAbout')
      },
      {
        name: nt.i('wiki', true),
        value: nt.i('subjectWiki')
      },
      {
        name: nt.i('functions', true),
        value: nt.i('subjectFunctions')
      }
    ]
  }})
}
