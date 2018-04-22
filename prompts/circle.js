const Circle = require(`../store/plugins/circle.js`)
module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  const argument = presets.arguments[0]
  if (argument) {
    if (isNaN(argument) === true) return
    message.channel.send({embed: {
     color: 16761035,
     title: presets.language.circle.title.replace(`%a`, argument),
     description: presets.language.circle.result.replace(`%a`, Math.PI).replace(`%b`, argument).replace(`%c`, Circle.area(argument)).replace(`%d`, Circle.circumference(argument))
    }})
  } else {
    message.reply(presets.language.circle.description)
  }
}
