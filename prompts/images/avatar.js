const Plan = (message, client) => {
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
      const member = message.guild.members.filter(user => user.user.username.toLowerCase().includes(message._se.data.join(' ').toLowerCase())).first()

      if (member) {
        avatar = {
          username: member.user.username,
          url: member.user.avatarURL
        }
      } else {
        return message.reply('누군지... 모르겠어요!')
      }
    }
  }
  message.channel.send({
    embed: {
      title: `${avatar.username}님의 프로필 사진이예요!`,
      image: {
        url: avatar.url
      }
    }
  })
}
const Properties = {
  name: 'avatar',
  requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties
