const Prompt = (message, client) => {
  message.channel.send(message._se.data.join(' ') || '저는 뭘 보내야 할지 결정하지 못했어요 :/')
}
const Properties = {
  name: 'say',
  description: '아마 당신이 말했던 것 아닐까요? 한 번 해보세요.',
  usage: 'say [말하고 싶은 것]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
