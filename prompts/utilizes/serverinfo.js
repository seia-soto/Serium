const Prompt = (message, client) => {

  let ServerinfoEmbed = {
    embed: {
      title: `서버 정보`,
      description: null,
      fields: [
        {
          name: '이름',
          value: `${message.guild.name}`
        },
        {
          name: '아이디',
          value: `${message.guild.id}`
        },
        {
          name: '서버지역',
          value: `${message.guild.region}`
        },
        {
          name: '오너',
          value: `<@${message.guild.owner.user.id}>`
        },
        {
          name: "멤버 수",
          value: `${message.guild.memberCount} 명`
        }
      ],
      thumbnail: {
          url: `${message.guild.iconURL}`
      },
      footer: {
        text: `${message.member.displayName}님이 사용하셨어요!`,
        icon_url: `${message.author.avatarURL}`
      }
    }
  }
  message.channel.send(ServerinfoEmbed)
}
const Properties = {
  name: 'serverinfo',
  description: 'Tells you the information related to the server',
  usage: 'serverinfo',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
