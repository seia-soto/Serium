const Prompt = (message, client) => {
  message.channel.send(message._se.data.join(' ') || '저는 뭘 보내야 할지 결정하지 못했어요 :/')
}
const Properties = {
  name: 'say',
  description: 'Is this you want to say? I said.',
  usage: 'say [want to say]',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
