const Discord = require('discord.js')
const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://osu.ppy.sh/api/get_user?k=' + process.env.Osu + '&u=' + nt.arguments.slice(0).join(' ') + '&m=0&event_days=30&type=string'
  request(endpoint, (error, response, body) => {
    if (error) { message.reply(error); return }
    const data = JSON.parse(body)
    const profile = data[0]
    if (profile) {
      const embed = new Discord.RichEmbed()
        .setTitle(profile.username + ' (' + profile.user_id + ')')
        .setColor(16761035)
        .setDescription(nt.i('defPlayer').replace('{country}', profile.country).replace('{playcount}', profile.playcount))
        .addField(nt.i('level', true),
        '**' + nt.i('totalscore', true) + '** ' + profile.total_score +
        '\n**' + nt.i('bestscore') + '** ' + profile.ranked_score, true)
      message.channel.send({embed})
    } else {
      message.reply(nt.i('noPlayer'))
    }
  })
}
