const { createHash } = require('crypto')

module.exports = (client, message, data, translate) => {
  const initial = data.message.index.diff.slice(0).join(' ')

  message.channel.send({embed: {
    color: data.application.embed.color,
    author: {
      name: 'MD5'
    },
    description: 'Message-Digest algorithm 5, 128bits, Hexadecimal',
    fields: [
      {
        name: translate.generic.crypto.origin,
        value: initial
      },
      {
        name: translate.generic.crypto.encoded,
        value: createHash('md5').update(initial).digest('hex')
      }
    ]
  }})
}
