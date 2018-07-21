module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.channel.send({embed: {
    color: 16761035,
    title: nt.i('help', true),
    description: '\n\n:earth_asia: https://soto-seia.github.io' +
    '\n:sparkles: [' + nt.i('invite', true) + ': ' + client.user.tag + '](https://discordapp.com/api/oauth2/authorize?client_id=' + client.user.id + '&permissions=8&scope=bot)' +
    '\n:information_source: v' + require('../../../package.json').version,
    fields: [
      {
        name: nt.i('Serium'),
        value: nt.i('subjectSerium')
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
