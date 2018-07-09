const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const endpoint = 'https://osu.ppy.sh/api/get_user?k=' + process.env.Osu + '&u=' + nt.arguments.slice(0).join(' ') + '&m=0&event_days=30&type=string'
  request(endpoint, (error, response, body) => {
    if (error) { message.reply(error); return }
    const profile = JSON.parse(body)
    if (profile.user_id) {
      
    } else {
      message.reply(nt.i('noPlayer'))
    }
  })
}
