const findUser = require('@utils/findUser')

const Prompt = (message, client) => {
  let avatar = {
    username: message.author.username,
    url: message.author.avatarURL
  }

  if (message._se.data[0]) {
    const mention = message.mentions.members.first()

    if (mention) {
      avatar = {
        username: mention.user.username,
        url: mention.user.avatarURL
      }
    } else {
      const user = findUser(message.guild.members, message._se.data.join(' '))

      if (user) {
        avatar = {
          username: user.user.username,
          url: user.user.avatarURL
        }
      } else {
        return message.reply(message._se.translates.userNotfound)
      }
    }
  }
  message.channel.send({
    embed: {
      title: message._se.translates.avatarOf.bind({name: avatar.username}),
      description: `[${message._se.directLink}](${avatar.url})`,
      image: {
        url: avatar.url
      }
    }
  })
}
const Properties = {
  name: 'avatar',
  usage: 'avatar [@mention, tag, username or nickname]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
