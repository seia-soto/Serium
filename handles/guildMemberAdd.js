const structures = require('../structures')

const {PreferenceIndicator, CaptchaIndicator} = structures

const timeout = 1000 * 60 * 5

const OnGuildMemberAdd = (member, client) => {
  // NOTE: Welcome trigger.
  PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole.forEach(StartingRole => {
    const roleToAdd = member.guild.roles.find(values => values.name === StartingRole)

    member.addRole(roleToAdd)
      .catch(error => console.error)
  })

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
            message.channel.send('서명을 확인해주셔서 감사합니다, 이제 서버에서 채팅을 계속하실 수 있습니다.')

            // NOTE: Verified, remove roles.
            PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole.forEach(StartingRole => {
              const roleToRemove = member.guild.roles.find(values => values.name === StartingRole)

              member.removeRole(roleToRemove)
                .catch(error => console.error)
            })
          }).catch(() => {
            message.channel.send('죄송합니다, 서명을 확인할 수 없습니다.')

            // NOTE: Couldn't verify, kick user.
            member.kick()
          })
        })
    })
}

module.exports = OnGuildMemberAdd
