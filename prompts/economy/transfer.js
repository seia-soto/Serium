const structures = require('@structures')

const {PreferenceIndicator, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  if (!message._se.data[1]) return message.reply(message._se.translates.amountMissing)

  const mention = message.mentions.members.first()
  if (mention) {
    if (!/^\d+$/.test(message._se.data[1])) return message.reply(message._se.translates.invalidNumber.bind({unit: PreferenceIndicator.Ecosystem.Economy.unit}))

    message.reply(message._se.translates.working).then(transferingMessage => {
      try {
        EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
          if (message._se.data[1] > preference.economy.shards) return transferingMessage.edit(message._se.translates.invalidAmount.bind({unit: PreferenceIndicator.Ecosystem.Economy.unit}))

          preference.economy.shards -= message._se.data[1]

          EndPreferenceIndicator.setUserSettings(message.author.id, preference).then(() => {
            EndPreferenceIndicator.getUserSettings(mention.user.id).then(recieverPreference => {
              recieverPreference.economy.shards += Number(message._se.data[1])

              EndPreferenceIndicator.setUserSettings(mention.user.id, recieverPreference).then(() => {
                transferingMessage.edit(message._se.translates.success.bind({
                  destination: mention.user.username,
                  amount: message._se.data[1],
                  unit: PreferenceIndicator.Ecosystem.Economy.unit
                }))
              })
            })
          })
        })
      } catch (error) {
        console.error(error)

        transferingMessage.edit(message._se.translates._errors.databaseFailure)
      }
    })
  } else {
    return message.reply(message._se.translates.destinationMissing)
  }
}
const Properties = {
  name: 'transfer',
  usage: 'transfer <someone> <amount>',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
