const structures = require('../structures')
const exceptions = require('./exceptions')

const {MessageParser, PreferenceIndicator} = structures
const {PermissionMissing, PromptUnavailable} = exceptions

const ExceptionHandles = [
  () => null, // NOTE: Ignore
  PermissionMissing,
  /*
   * Constructing divided callbacks;
   */
  PromptUnavailable.forGuild,
  PromptUnavailable.forUser
]

const MessageHandler = (raw, client) => {
  const message = MessageParser(raw)

  const Exceptions = [
    (!message.startsWith(PreferenceIndicator.App.Prefix)),
    (!message.guild.me.hasPermission('SEND_MESSAGES')),
    (!message._se.prompt in PromptIndicator.availableFor('guild', message.guild)),
    (!message._se.prompt in PromptIndicator.availableFor('user', message.author))
  ]
  if (Exceptions) ExceptionHandles[Exceptions.indexOf(true)](message)
}

module.exports = MessageHandler
