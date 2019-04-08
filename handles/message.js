const prompts = require('../prompts')
const structures = require('../structures')

const {MessageParser, PermissionParser, PreferenceIndicator, ReportException} = structures

const MessageHandler = (rawMessage, client) => {
  // NOTE: Remove all un-handled requests.
  if (rawMessage.author.bot || rawMessage.channel.type === 'dm') return

  const message = MessageParser(rawMessage)
  const permission = PermissionParser(rawMessage)

  const Exceptions = [
    (!message.content.startsWith(PreferenceIndicator.App.Prefix)),
    (!message.guild.me.hasPermission('SEND_MESSAGES')),
    (!(message._se.prompt in prompts))
  ]
  if (!Exceptions.includes(true)) {
    try {
      if (PermissionParser.isValidFor(message._se.prompt, permission)) {
        prompts[message._se.prompt].require(message, client)
      } else {
        message.reply('이 명령어를 실행하기에 권한이 부족합니다.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  ReportException(message, Exceptions)
}

module.exports = MessageHandler
