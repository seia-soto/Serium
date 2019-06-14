const EndPreferenceIndicator = require('@structures/EndPreferenceIndicator')

const Prompt = (message, client) => {
  EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
    const toDisable = message._se.data[0]
    if (!toDisable || typeof preference[toDisable] === 'undefined') return message.reply(message._se.translates.preferenceMissing)

    preference[toDisable] = false

    EndPreferenceIndicator.setGuildSettings(message.guild.id, preference)
      .then(() => message.reply(message._se.translates.disabled.bind({which: toDisable})))
      .catch(error => {
        console.error(error)

        message.reply(message._se.translates._errors.databaseFailure)
      })
  }).catch(error => {
    console.error(error)

    message.reply(message._se.translates._errors.databaseFailure)
  })
}
const Properties = {
  name: 'disable',
  usage: 'disable <toDisable>',

  requiredPermission: 'staff'
}

module.exports = Prompt
module.exports.properties = Properties
