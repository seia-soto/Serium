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
  NekosLifeAPIParser('kiss').then(imageURI => {
    let targeted = message._se.data[0]

    if (targeted) {
      if (message.mentions.members.first()) {
        targeted = message.mentions.members.first().user.username
      }

      basedEmbed.embed.title = `헉... ${message.author.username}님이랑 ${targeted}님이랑 으으... 더 이상 말할 수 없다고요!`
    } else {
      basedEmbed.embed.title = '흐응? 앗... 아?! 잠깐만요, 여기까지... 제발 여기까지요!'
    }

    basedEmbed.embed.image.url = imageURI
    message.channel.send(basedEmbed)
  }).catch(error => {
    message.reply('으... 아하하... 시간이 다 되었다고요, 나중에 봐영~')
  })
}
const Properties = {
  name: 'kiss',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
