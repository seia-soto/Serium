const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('*You need to run command on **NSFW** channel.*')
  } else {
    NekosLifeAPI.nsfw.neko().then(response => {
      message.channel.send({
        embed: {
          title: 'Lewd',
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
  name: 'lewd',
  usage: 'lewd',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
