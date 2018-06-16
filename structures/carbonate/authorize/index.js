const stone = require('../../../stores').carbonate
module.exports = (message) => {
  let authorized = true
  if (stone[message.guild.id]) {
    authorized = false
  }
  return authorized
}
