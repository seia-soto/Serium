module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  message.channel.send({embed: {
    color: 16761035,
    title: nt.translations.help.title,
    description: nt.translations.help.description,
    fields: [
      {
        name: nt.translations.help.names.seriumium,
        value: nt.translations.help.values.seriumium
      },
      {
        name: nt.translations.help.names.moderations,
        value: nt.translations.help.values.moderations
      },
      {
        name: nt.translations.help.names.images,
        value: nt.translations.help.values.images
      },
      {
        name: nt.translations.help.names.gladsome,
        value: nt.translations.help.values.gladsome
      }
    ]
  }})
}
