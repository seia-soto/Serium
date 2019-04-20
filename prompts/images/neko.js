const structures = require('../../structures')

const {NekosLifeAPIParser} = structures

const Plan = (message, client) => {
  NekosLifeAPIParser('neko').then(imageURI => {
    message.channel.send({
      embed: {
        title: '저만큼은 아니... 아니지만...! 으엑... 귀여운 네코다냥?',
        image: {
          url: imageURI
        }
      }
    })
  }).catch(error => {
    message.reply('미안, 네코씨는 지금 너랑 놀기가 싫다고... 한 번 더 불러봐!')
  })
}
const Properties = {
  name: 'neko',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
