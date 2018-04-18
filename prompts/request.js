const Request = require(`request`)
let options = {
  permissions: 0,
  interprete: [`request`, `요청`]
}
exports.options = options

exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    await Request(`${presets.arguments.slice(0).join(' ')}`, (error, response, body) => {
      if (error) { message.reply(error) } else {
        message.channel.send({embed: {
         color: 16761035,
         title: `**Search:** ${presets.arguments.slice(0).join(' ')}`,
         description: `**${response.statusCode}:** ${body.substring(0, 2000)}`
        }})
      }
    })
  } else {
    message.reply(`Push a request to url that you gave. Result is body and statusCode of respones. Argument is string to push.`)
  }
}
