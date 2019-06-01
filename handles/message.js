const structures = require('@structures')

const {EndPreferenceIndicator, MessageParser, PermissionParser, PreferenceIndicator, PromptIndicator, ReportException} = structures
const prompts = PromptIndicator

const PostExceptionsMessages = [
  '어라... 당신, 그러고 보니 아직 벌서 이 명령어를 쓰기에는 약간 이를수도 있겠네요.',
  '현재 기능은 비활성화되어 있어요, `se configure`를 사용하여 확인해보세요.'
]

const MessageHandler = (rawMessage, client) => {
  // NOTE: Remove all un-handled requests.
  if (rawMessage.author.bot || rawMessage.channel.type === 'dm') return

  const message = MessageParser(rawMessage)
  const permission = PermissionParser(rawMessage)

  const namespace = `prompt.${message._se.prompt}`

  // NOTE: Get EndPreferences.
  EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
    const Exceptions = [
      (!message.content.startsWith(PreferenceIndicator.App.Prefix)),
      (!message.guild.me.hasPermission('SEND_MESSAGES')),
      (!(message._se.prompt in prompts))
    ]
    if (!Exceptions.includes(true)) {
      try {
        const PostExceptions = [
          (PermissionParser.isValidFor(PromptIndicator[message._se.prompt].properties.requiredPermission, permission)),
          (preference[namespace] === undefined || preference[namespace] === true)
        ]
        if (PostExceptions.includes(false)) return message.reply(PostExceptionsMessages[PostExceptions.indexOf(false)])

        // NOTE: Paste extra values.
        message._se.permission = permission

        // NOTE: Execution of function.
        prompts[message._se.prompt](message, client)
      } catch (error) {
        console.error(error)
      }
    }

    ReportException(message, Exceptions)
  }).catch(error => {
    console.error(error)
  })
}

module.exports = MessageHandler
