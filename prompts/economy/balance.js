const structures = require('@structures')

const {PreferenceIndicator, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  let identify = message.author

  const mention = message.mentions.members.first()
  if (mention) identify = mention.user

  EndPreferenceIndicator.getUserSettings(identify.id).then(preference => {
    message.reply(message._se.translates.currency.bind({
      name: identify.username,
      balance: preference.economy.shards,
      unit: PreferenceIndicator.Ecosystem.Economy.unit
    }))
  }).catch(error => {
    console.error(error)

    message.reply(message._se.translates._errors.databaseFailure)
  })
}
const Properties = {
  name: 'balance',
  usage: 'balance [someone]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
