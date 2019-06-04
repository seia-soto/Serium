const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  NekosLifeAPI.sfw.neko().then(response => {
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
  description: '냥냥거리는 고양이 소녀에 대한 무작위 이미지인데요, 약간의 *모에함*이 있어야 해요!',
  usage: 'neko',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
