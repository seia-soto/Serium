const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('실은 이런 일은 처리하지 않는다냥?')
  } else {
    NekosLifeAPI.nsfw.hentai().then(response => {
      message.channel.send({
        embed: {
          title: '으엥... 이런거 몰라도 되는거 아니야?',
          image: {
            url: response.url
          }
        }
      })
    }).catch(error => {
      message.reply('미안, 네코씨는 지금 너랑 놀기가 싫다고... 한 번 더 불러봐!')
    })
  }
}
const Properties = {
  name: 'hentai',
  description: 'Also one of NSFW command, no description required. You can just launch this at NSFW channel to know what this mean.',
  usage: 'hentai',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
