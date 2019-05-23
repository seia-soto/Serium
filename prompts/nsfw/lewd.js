const NekosLifeAPI = require('@structures/NekosLifeAPI')

const Prompt = (message, client) => {
  if (!message.channel.nsfw) {
    message.reply('실은 학생회는 이런 일은 처리하지 않는다냥?')
  } else {
    NekosLifeAPI.nsfw.lewd().then(response => {
      message.channel.send({
        embed: {
          title: '으엥... 학생회는 이런거 몰라도 되는거 아니야?',
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
  name: 'lewd',
  description: 'LEWD is not recommended at all.',
  usage: 'lewd',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
