const Request = require(`request`)
let options = {
  permissions: 0
}
exports.options = options

exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    await Request(`https://en.wikipedia.org/api/rest_v1/page/summary/${presets.arguments.slice(0).join(' ').replace(' ', '%20')}`, (error, response, body) => {
      if (error) { message.reply(error) } else {
        try {
          let result = JSON.parse(body)
          message.channel.send({embed: {
           color: 16761035,
           title: `${result.title}`,
           description: `${result.extract}`
          }})
        } catch (error) {
          message.reply(`Can't parse JSON response.`)
        }
      }
    })
  } else {
    message.reply(`Search wikipedia(en) and get result of document. Argument is string to search.`)
  }
}
