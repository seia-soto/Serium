const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  NekosLifeAPI.sfw.neko.then(response => {
    message.channel.send({
      embed: {
        title: '저만큼은 아니... 아니지만...! 으엑... 귀여운 네코다냥?',
        image: {
          url: response.url
        }
      }
    })
  }).catch(error => {
    message.reply('미안, 네코씨는 지금 너랑 놀기가 싫다고... 한 번 더 불러봐!')
  })
}
const Properties = {
  name: 'neko',
  description: 'Image about cute cat girls? Maybe more *Moe* needed.',
  usage: 'neko',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
