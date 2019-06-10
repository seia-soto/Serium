const RequestHandler = require('@structures/RequestHandler')

const Prompt = (message, client) => {
  RequestHandler('https://api.thecatapi.com/v1/images/search')
    .then(data => {
      message.channel.send({
        embed: {
          title: '냥냥... 사실 이게 진짜 고양이라고요!',
          image: {
            url: JSON.parse(data)[0].url
          }
        }
      })
    })
    .catch(error => message.reply('고양이.. 지금은 자고 있나?'))
}
const Properties = {
  name: 'cat',
  description: '이 세상에 존재하는 냥캣이라고요! *실제 냥캣*',
  usage: 'cat',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
