const Request = require(`request`)
module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
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
          message.reply(presets.language.library.parseError)
        }
      }
    })
  } else {
    message.reply(presets.language.library.description)
  }
}
