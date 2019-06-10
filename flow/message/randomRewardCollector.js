const EndPreferenceIndicator = require('@structures/EndPreferenceIndicator')

const isCollective = (maxPercentage, accptablePercentage) => {
  return ((Math.round(Math.random() * maxPercentage) + 1) < accptablePercentage) ? true : false
}
const randomRewardCollector = message => {
  if (isCollective(100, 2)) {
    EndPreferenceIndicator.getUserSettings(message.author.id).then(preference => {
      preference.economy.shards += 2

      EndPreferenceIndicator.setUserSettings(message.author.id, preference)
    })
  }
}

module.exports = randomRewardCollector
