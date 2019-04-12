const structures = require('../../structures')

const {NekosLifeAPIParser} = structures

const Plan = (message, client) => {
  let requestFor = 'neko'
  let responseAs = '저만큼은 아니... 아니지만...! 으엑... 귀여운 네코다냥?'

  if (message.channel.nsfw) {
    requestFor = 'lewd'
    responseAs = '으엥... 학생회는 이런거 몰라도 되는거 아니야?'
  }
  NekosLifeAPIParser(requestFor).then(imageURI => {
    message.channel.send({
      embed: {
        title: responseAs,
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
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
