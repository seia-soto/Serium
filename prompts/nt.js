module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  let data
  let args = presets.arguments
  switch (args[0]) {
    case `prob`:
      if (!args[1]) return
      const probPercentage = Math.floor(Math.random() * 100) + 1
      const probSubject = args.slice(1).join(' ')
      message.channel.send(`${probSubject} 확률은 ${probPercentage}%입니다.`)
      break;
    default:
      message.reply(`이 명령어들은 사용자 요청에 의해서 추가됩니다. 새로운 명령어는 \`;help\`를 사용해서 지원 서버에서 요청해주세요.
\n**현재 사용가능한 명령어 목록**
__prob__`)
  }
}
