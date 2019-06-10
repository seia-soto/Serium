const MyAnimeListAPI = require('@structures/MyAnimeListAPI')

const Prompt = (message, client) => {
  if (!message._se.data[0]) {
    return message.reply('으... 검색어도 안 주시다니 서기한테 너무 무례하시네요, 저는 당신 상상 속 서기가 아니라고요.')
  } else {
    const keyword = message._se.data.join(' ')

    MyAnimeListAPI.search(keyword, 'anime')
      .then(data => {
        const result = data[0]

        let embed = {
          title: result.name,
          description: `${result.payload.media_type} | ${result.payload.start_year}년`,
          fields: [
            {
              name: '상영기간',
              value: result.payload.aired,
              inline: true
            },
            {
              name: '평점',
              value: `${result.payload.score}점`,
              inline: true
            }
          ],
          image: {
            url: result.image_url
          }
        }
        message.channel.send({ embed: embed })
      })
      .catch(error => {
        message.reply('사실 저 2D는 잘 모르는거예요! 공부하고 올테니 나중에 물어봐주세요.')
      })
  }
}
const Properties = {
  name: 'anime',
  description: 'MyAnimeList에서 애니메이션을 검색합니다, 2D는 잘 몰라서 간단한 정보만 가져올거예요.',
  eval: 'anime <키워드>',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
