const { getHashes, createHash } = require('crypto')

const list = getHashes()

module.exports = (client, message, data, translate) => {
  const initial = {
    type: data.message.index.diff[0],
    message: data.message.index.diff.slice(1).join(' ')
  }
  let form = {
    color: data.application.embed.color,
    author: {
      name: 'Crypto'
    },
    description: `${translate.generic.crypto.nohash}${list.toString().replace(/ /, ', ')}`
  }

  if (list.includes(initial.type) && initial.message !== '') {
    form = {
      color: data.application.embed.color,
      author: {
        name: 'Crypto'
      },
      description: initial.type,
      fields: [
        {
          name: translate.generic.crypto.origin,
          value: initial.message
        },
        {
          name: translate.generic.crypto.encoded,
          value: createHash(initial.type).update(initial.message).digest('hex')
        }
      ]
    }
  }

  message.channel.send({embed: form})
}
