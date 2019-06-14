const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('*You need to run command on **NSFW** channel.*')
  } else {
    NekosLifeAPI.nsfw.femdom().then(response => {
      message.channel.send({
        embed: {
          title: 'Tits',
          image: {
            url: response.url
          }
        }
      })
    }).catch(error => {
      message.reply(message._se.translates._errors.apiFailure)
    })
  }
}
const Properties = {
  name: 'tits',
  usage: 'tits',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
