const structures = require('../structures')

const {CheckRequirements, CaptchaIndicator, PreferenceIndicator} = structures

// NOTE: Five minutes.
const timeout = 1000 * 60 * 5

const OnGuildMemberAdd = (member, client) => {
  // NOTE: Ignore bots and other servers for trigger.
  if (member.bot || CheckRequirements.events.guildMemberAdd.verifyCaptcha(member.guild).signal === false) return

  // NOTE: Welcome trigger.
  PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole.forEach(StartingRole => {
    const roleToAdd = member.guild.roles.find(values => values.name === StartingRole)

    // NOTE: Handle errors.
    member.addRole(roleToAdd)
      .catch(error => console.error)
  })

  // NOTE: Get captcha's image file uri and send it to user.
  CaptchaIndicator(timeout)
    .then(captcha => {
      const attachment = {
        files: [
          {
            attachment: captcha.uri,
            name: 'captcha.png'
          }
        ]
      }

      // NOTE: Verify new member.
      member.send('Sewritten 사무국입니다, 아래의 이미지에 적혀진 문자를 5분 내에 입력해주세요.', attachment)
        .then(message => {
          message.channel.awaitMessages(response => response.content === captcha.solution, {
            max: 1,
            time: timeout,
            errors: ['time']
          }).then(collected => {
            message.channel.send('서명을 확인해주셔서 감사합니다, 이제 서버에서의 채팅이 허용되었습니다!')

            // NOTE: Verified, remove roles.
            PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole.forEach(StartingRole => {
              const roleToRemove = member.guild.roles.find(values => values.name === StartingRole)

              member.removeRole(roleToRemove)
                .catch(error => console.error)
            })
          }).catch(() => {
            message.channel.send('죄송합니다, 서명을 확인할 수 없습니다. 다시시도하려면 서버에 재입장해야 합니다.')

            // NOTE: Couldn't verify, kick user.
            member.kick()
          })
        })
    })
}

module.exports = OnGuildMemberAdd
