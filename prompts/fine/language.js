const structures = require('@structures')
const translates = require('@translates')

const {CaseSensitive, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
    if (message._se.data[0]) {
      if (message._se.data[0] in translates) {
        preference.langauge = message._se.data[0]

        EndPreferenceIndicator.setUserSettings(message.author.id, preference).then(() => message.reply(message._se.translates.checkedOut.bind({language: message._se.data[0]})))
      } else {
        message.reply(message._se.translates.unsupported.bind({langauge: message._se.data[0]}))
      }
    } else {
      message.channel.send(message._se.translates.current.bind({language: preference.language}))
    }
  }).catch(error => {
    console.error(error)

    message.reply(message._se.translates._errors.databaseFailure)
  })
}
const Properties = {
  name: 'langauge',
  usage: 'langauge [langauge to set]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
