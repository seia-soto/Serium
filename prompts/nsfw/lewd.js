const structures = require('../../structures')

const {NekosLifeAPIParser} = structures

const Plan = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('실은 학생회는 이런 일은 처리하지 않는다냥?')
  } else {
    NekosLifeAPIParser('lewd').then(imageURI => {
      message.channel.send({
        embed: {
          title: '으엥... 학생회는 이런거 몰라도 되는거 아니야?',
          image: {
            url: imageURI
          }
        }
      })
    }).catch(error => {
      message.reply('미안, 네코씨는 지금 너랑 놀기가 싫다고... 한 번 더 불러봐!')
    })
  }
}
const Properties = {
  name: 'lewd',
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
