const moment = require('moment')
const structures = require('@structures')

const {DateFormer, PreferenceIndicator, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  moment.locale(message._se.translates._language)

  EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
    const current = new Date()
    const lastConfirm = new Date(preference.economy.lastConfirm)

    if (moment(current).isAfter(moment(lastConfirm).add(1, 'days'))) {
      preference.economy.lastConfirm = new Date()
      preference.economy.shards += PreferenceIndicator.Ecosystem.Economy.dailyWages

      EndPreferenceIndicator.setUserSettings(message.author.id, preference).then(() => {
        message.reply(message._se.translates.added.bind({
          dailyWages: PreferenceIndicator.Ecosystem.Economy.dailyWages,
          unit: PreferenceIndicator.Ecosystem.Economy.unit
        }))
      }).catch(error => {
        console.error(error)

        message.reply(message._se.translates._errors.databaseFailure)
      })
    } else {
      message.reply(message._se.translates.alreadyRecieved.bind({
        time: moment(lastConfirm).add(1, 'days').fromNow()
      }))
    }
  }).catch(error => {
    console.error(error)

    message.reply(message._se.translates._errors.databaseFailure)
  })
}
const Properties = {
  name: 'daily',
  usage: 'daily',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
