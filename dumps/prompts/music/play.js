const VideoStreamIndicator = require('../../structures/VideoStreamIndicator')

const Plan = (message, client) => {
  const voiceChannel = message.member.voiceChannel

  if (voiceChannel) {
    voiceChannel.join().then(connection => {
      VideoStreamIndicator(message._se.data[0])
        .then(stream => {
          message.reply('이제... 하나... 둘.')

          connection.playStream(stream)
        })
        .catch(error => {
          const lines = {
            'INVALID_URL': '제가 재생할 수 있는지 다시 한 번 확인해주세요!'
          }
          message.reply(lines[error] || '앗... 갑자기 목이 쉬었어요, 나중에 부를게요.')

          console.error(error)
        })
    }).catch(console.error)
  } else {
    message.reply('제가 노래를 부를 수 있게 음성 채널을 마련해주세요!')
  }
}
const Properties = {
  name: 'play',
  requiredPermission: 0x0
}

module.exports = Plan
module.exports.properties = Properties
