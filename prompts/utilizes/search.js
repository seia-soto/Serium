const search = require('google')
const PreferenceIndicator = require('@structures/PreferenceIndicator')

search.resultsPerPage = 1

const Prompt = (message, client) => {
  if (!message._se.data[0]) {
    return message.reply(message._se.translates.search.keywordMissing)
  } else {
    const keyword = message._se.data.join(' ')

    search(keyword, (error, response) => {
      if (error) {
        console.error(error)

        return message.reply(message._se.translates.unknownFailure)
      }
      if (!response.links[0]) {
        return message.reply(message._se.translates.nothingFound)
      }

      message.channel.send({
        embed: {
          title: response.links[0].title,
          description: response.links[0].description,
          url: response.links[0].href,
          footer: {
            text: message._se.translates.searchResultOf.bind({keyword: keyword})
          }
        }
      })
    })
  }
}
const Properties = {
  name: 'search',
  usage: 'search <keyword>',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
