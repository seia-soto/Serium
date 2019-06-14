const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('*You need to run command on **NSFW** channel.*')
  } else {
    NekosLifeAPI.nsfw.femdom().then(response => {
      message.channel.send({
        embed: {
          title: 'Femdom',
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
  name: 'femdom',
  usage: 'femdom',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
