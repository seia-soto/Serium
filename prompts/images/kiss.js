const NekosLifeAPI = require('@structures/NekosLifeAPI')

let basedEmbed = {
  embed: {
    title: null,
    image: {
      url: null
    }
  }
}

const Prompt = (message, client) => {
  NekosLifeAPI.sfw.kiss().then(response => {
    let targeted = message._se.data[0]

    if (targeted) {
      if (message.mentions.members.first()) {
        targeted = message.mentions.members.first().user.username
      }

      basedEmbed.embed.title = `헉... ${message.author.username}님이랑 ${targeted}님이랑 으으... 더 이상 말할 수 없다고요!`
    } else {
      basedEmbed.embed.title = '흐응? 앗... 아?! 잠깐만요, 여기까지... 제발 여기까지요!'
    }

    basedEmbed.embed.image.url = response.url
    message.channel.send(basedEmbed)
  }).catch(error => {
    message.reply('으... 아하하... 시간이 다 되었다고요, 나중에 봐영~')
  })
}
const Properties = {
  name: 'kiss',
  description: 'Discord에서 키스하는 것은 일반적인 일은 아닌 것 맞죠? 그렇죠...?;',
  usage: 'kiss [누군가]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
