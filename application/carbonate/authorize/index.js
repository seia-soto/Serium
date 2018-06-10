const stone = require('../../../data').carbonate
module.exports = (message) => {
  let authorized = true
  if (stone[message.guild.id]) {
    authorized = false
  }
  return authorized
}
