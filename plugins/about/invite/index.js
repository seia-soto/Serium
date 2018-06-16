module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.channel.send({embed: {
    color: 16761035,
    title: nt.i('invite', true),
    description: ':sparkles: https://seriumium.github.io/invite',
    fields: [
      {
        name: nt.i('support', true),
        value: nt.i('needSupports')
      }
    ]
  }})
}
