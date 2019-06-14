const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  NekosLifeAPI.sfw.neko().then(response => {
    message.channel.send({
      embed: {
        title: message._se.translates.state,
        image: {
          url: response.url
        }
      }
    })
  }).catch(error => {
    message.reply(message._se.translates._errors.apiFailure)
  })
}
const Properties = {
  name: 'neko',
  usage: 'neko',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
