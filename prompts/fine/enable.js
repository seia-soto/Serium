const EndPreferenceIndicator = require('@structures/EndPreferenceIndicator')

const Prompt = (message, client) => {
  EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
    const toEnable = message._se.data[0]
    if (!toEnable || typeof preference[toEnable] === 'undefined') return message.reply(message._se.translates.preferenceMissing)

    preference[toEnable] = true

    EndPreferenceIndicator.setGuildSettings(message.guild.id, preference)
      .then(() => message.reply(message._se.translates.enabled.bind({which: toEnable})))
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
  name: 'enable',
  usage: 'enable <toEnable>',

  requiredPermission: 'staff'
}

module.exports = Prompt
module.exports.properties = Properties
