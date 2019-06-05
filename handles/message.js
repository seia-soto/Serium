const structures = require('@structures')

const {EndPreferenceIndicator, MessageParser, PermissionParser, PreferenceIndicator, PromptIndicator, ReportException} = structures
const prompts = PromptIndicator

const MessageHandler = (rawMessage, client) => {
  // NOTE: Remove all un-handled requests.
  if (rawMessage.author.bot || rawMessage.channel.type === 'dm') return

  const message = MessageParser(rawMessage)
  const permission = PermissionParser(rawMessage)

  const Exceptions = [
    (message.content.startsWith(PreferenceIndicator.App.Prefix)),
    (message.guild.me.hasPermission('SEND_MESSAGES')),
    (message._se.prompt in prompts)
  ]
  if (!Exceptions.includes(false)) {
    EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
      try {
        const PostExceptions =
          (preference[`prompt.${message._se.prompt}`] === false) ||
          (!PermissionParser.isValidFor(prompts[message._se.prompt].properties.requiredPermission, permission))
        if (PostExceptions) return

        // NOTE: Paste extra values.
        message._se.permission = permission

        // NOTE: Execution of function.
        prompts[message._se.prompt](message, client)
      } catch (error) {
        console.error(error)
      }
    }).catch(error => {
      console.error(error)
    })
  }

  ReportException(message, Exceptions)
}

module.exports = MessageHandler
