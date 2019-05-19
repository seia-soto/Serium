const search = require('google')

const PreferenceIndicator = require('@structures/PreferenceIndicator')

search.resultsPerPage = 1

const Plan = (message, client) => {
  if (!message._se.data[0]) {
    return message.reply('으... 서기한테 너무 무례하게도 검색을 하라면서 검색어는 주시지도 않았어요!')
  } else {
    const keyword = message._se.data.join(' ')

    search(keyword, (error, response) => {
      if (error) {
        console.error(error)

        return message.reply('앗... 지금은 Google에 연결할 수 없었어요!')
      }
      if (!response.links[0]) {
        return message.reply('검색을 해봤는데, 자료가 없어요!')
      }

      message.channel.send({
        embed: {
          title: response.links[0].title,
          description: response.links[0].description,
          url: response.links[0].href,
          footer: {
            text: `${keyword}에 대한 검색 결과예요!`
          }
        }
      })
    })
  }
}
const Properties = {
  name: 'search',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
