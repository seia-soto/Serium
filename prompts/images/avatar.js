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
        return message.reply('누군지... 누군지 기억이 안 나는 걸까요? 모르겠어요!')
      }
    }
  }
  message.channel.send({
    embed: {
      title: `${avatar.username}님의 프로필 사진이예요!`,
      description: `[직접 링크](${avatar.url})`,
      image: {
        url: avatar.url
      }
    }
  })
}
const Properties = {
  name: 'avatar',
  description: 'Show someone\'s avatar with mention or search someone\'s name.',
  usage: 'avatar [someone-or-mention]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
