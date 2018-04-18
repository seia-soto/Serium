const circle = require(`../store/functions/circle.js`)
let options = {
  permissions: 0,
  interprete: [`circle`, `원`]
}
exports.options = options

exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    if (isNaN(presets.arguments[0]) === true) return
    message.channel.send({embed: {
     color: 16761035,
     title: `**Circle:** about radius ${presets.arguments[0]}`,
     description: `**PI** ${Math.PI}\n**Radius** ${presets.arguments[0]}\n**Area** ${circle.area(presets.arguments[0])}\n**Circumference** ${circle.circumference(presets.arguments[0])}`
    }})
  } else {
    message.reply(`Returns you circle circumference and area about radius.`)
  }
}
