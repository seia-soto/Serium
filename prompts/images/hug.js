const structures = require('@structures')

const {NekosLifeAPIParser} = structures

let basedEmbed = {
  embed: {
    title: null,
    image: {
      url: null
    }
  }
}

const Plan = (message, client) => {
  NekosLifeAPIParser('hug').then(imageURI => {
    let targeted = message._se.data[0]

    if (targeted) {
      if (message.mentions.members.first()) {
        targeted = message.mentions.members.first().user.username
      }

      basedEmbed.embed.title = `헉... ${message.author.username}님이랑 ${targeted}님이랑 사귄데요오~`
    } else {
      basedEmbed.embed.title = '헤에... 나도... 나두나두 안아줘어~ >~<'
    }

    basedEmbed.embed.image.url = imageURI
    message.channel.send(basedEmbed)
  }).catch(error => {
    message.reply('지금은 안아주기 싫은뎅... (주섬주섬')
  })
}
const Properties = {
  name: 'hug',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
