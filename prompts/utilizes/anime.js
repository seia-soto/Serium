const MyAnimeListAPI = require('@structures/MyAnimeListAPI')

const Prompt = (message, client) => {
  if (!message._se.data[0]) {
    return message.reply(message._se.translates.keywordMissing)
  } else {
    const keyword = message._se.data.join(' ')

    MyAnimeListAPI.search(keyword, 'anime')
      .then(data => {
        const result = data[0]

        let embed = {
          title: result.name,
          description: `${result.payload.media_type} | ${result.payload.start_year}`,
          fields: [
            {
              name: message._se.translates.onairDuration,
              value: result.payload.aired,
              inline: true
            },
            {
              name: message._se.translates.publicScore,
              value: `:star: __${result.payload.score}__/10`,
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
        message.reply(message._se.translates._errors.apiFailure)
      })
  }
}
const Properties = {
  name: 'anime',
  eval: 'anime <keyword>',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
