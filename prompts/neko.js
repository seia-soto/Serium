const Request = require(`request`)
module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  if (message.channel.type !== `nsfw`) {
    message.reply(presets.language.neko.notNSFW)
  } else {
    await Request(`https://nekos.life/api/v2/img/neko`, (error, response, body) => {
      if (error) { message.reply(error) } else {
        try {
          let result = JSON.parse(body)
          message.channel.send({files: [result.url]})
        } catch (error) {
          message.reply(presets.language.neko.parseError)
        }
      }
    })
  }
}
