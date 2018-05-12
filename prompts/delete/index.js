module.exports.permissions = 1
module.exports.execute = (client, message, nt) => {
  if (nt.arguments[0]) {
    message.delete()
    if (isNaN(nt.arguments[0]) === true || nt.arguments[0] > 45) return
    try {
      message.channel.bulkDelete(nt.arguments[0])
    } catch (error) {
      console.error(error)
    }
  } else {
    message.reply(nt.i('invaildParameter'))
  }
}
