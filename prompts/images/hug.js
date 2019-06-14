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
  NekosLifeAPI.sfw.hug().then(response => {
    let targeted = message._se.data[0]

    if (targeted) {
      if (message.mentions.members.first()) {
        targeted = message.mentions.members.first().user.username
      }

      basedEmbed.embed.title = message._se.translates.betweenTwoMember.bind({firstMember: message.author.username, secondMember: targeted})
    } else {
      basedEmbed.embed.title = message._se.translates.state
    }

    basedEmbed.embed.image.url = reponse.url
    message.channel.send(basedEmbed)
  }).catch(error => {
    message.reply(message._se.translates._errors.apiFailure)
  })
}
const Properties = {
  name: 'hug',
  usage: 'hug [someone]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
