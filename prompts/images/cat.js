const RequestHandler = require('@structures/RequestHandler')

const Prompt = (message, client) => {
  RequestHandler('https://api.thecatapi.com/v1/images/search')
    .then(data => {
      message.channel.send({
        embed: {
          title: message._se.translates.state.bind,
          image: {
            url: JSON.parse(data)[0].url
          }
        }
      })
    })
    .catch(error => message.reply(message._se.translates._errors.apiFailure))
}
const Properties = {
  name: 'cat',
  usage: 'cat',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
