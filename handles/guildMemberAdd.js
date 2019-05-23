const structures = require('../structures')

const {CheckRequirement, EndPreferenceIndicator, CaptchaIndicator, PreferenceIndicator} = structures

// NOTE: Five minutes.
const timeout = 1000 * 60 * 5

const OnGuildMemberAdd = (member, client) => {
  // NOTE: Ignore bots and other servers for trigger.
  const minimumRequiredEvaluations =
    (member.bot) ||
    (CheckRequirement.events.guildMemberAdd.verifyCaptcha(member.guild).signal === false)
  if (minimumRequiredEvaluations) return

  EndPreferenceIndicator(member.guild.id).then(preference => {
    if (!preference['guildMemberAdd.verifyCaptcha']) return

    // NOTE: Attach roles.
    const roleToAdd = member.guild.roles.find(values => values.name === PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole)

    // NOTE: Handle errors.
    member.addRole(roleToAdd)
      .catch(error => console.error)

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
        member.send('반가워요, 아래의 이미지에 적혀진 문자를 5분 내에 입력해주세요.', attachment)
          .then(message => {
            message.channel.awaitMessages(response => response.content === captcha.solution, {
              max: 1,
              time: timeout,
              errors: ['time']
            }).then(collected => {
              message.channel.send('서명을 확인해주셔서 감사합니다, 이제 서버에서의 채팅이 허용되었습니다!')

              // NOTE: Verified, remove roles.
              const roleToRemove = member.guild.roles.find(values => values.name === PreferenceIndicator.Discord.EventOptions.guildMemberAdd.StartingRole)

              member.removeRole(roleToRemove)
                .catch(error => console.error)
            }).catch(error => {
              message.channel.send('죄송합니다, 서명을 확인할 수 없습니다. 다시시도하려면 서버에 재입장해주세요.')

              // NOTE: Couldn't verify, kick user.
              member.kick()
            })
          })
      })
  }).catch(error => null) // NOTE: Ignore errors.
}

module.exports = OnGuildMemberAdd
