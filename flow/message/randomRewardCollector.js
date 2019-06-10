const structures = require('@structures')

const {EndPreferenceIndicator, PreferenceIndicator} = structures

const isCollective = (maxPercentage, accptablePercentage) => {
  return ((Math.round(Math.random() * maxPercentage) + 1) < accptablePercentage) ? true : false
}
const randomRewardCollector = message => {
  if (isCollective(100, PreferenceIndicator.Ecosystem.Economy.randomWages.percentage)) {
    EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
      preference.economy.shards += PreferenceIndicator.Ecosystem.Economy.randomWages.amount

      EndPreferenceIndicator.setUserSettings(message.author.id, preference)
    })
  }
}

module.exports = randomRewardCollector
