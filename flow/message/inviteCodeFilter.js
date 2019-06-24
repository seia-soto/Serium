const inviteCodeFilter = message => {
  if (message.guild.id !== '563994944604340254') return

  if (message.content.match(/discord(?:app\.com|\.gg)[\/invite\/]?(?:(?!.*[Ii10OolL]).[a-zA-Z0-9]{5,6}|[a-zA-Z0-9\-]{2,32})/)) {
    message.delete()

    message.reply('초대 코드는 첨부하실 수 없습니다.')
  }
}

module.exports = inviteCodeFilter
