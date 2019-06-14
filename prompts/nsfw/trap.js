const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('*You need to run command on **NSFW** channel.*')
  } else {
    NekosLifeAPI.nsfw.trap().then(response => {
      message.channel.send({
        embed: {
          title: 'Trap',
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
  name: 'trap',
  usage: 'trap',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
