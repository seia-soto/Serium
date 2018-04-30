module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let embed
  if (nt.permissions === 0) {
    embed = {embed: {
      color: 16761035,
      title: nt.translations.help.title,
      description: nt.translations.help.description,
      fields: [
        {
          name: nt.translations.help.names.seriumium,
          value: nt.translations.help.values.seriumium.common
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
    }}
  } else if (nt.permissions === 2) {
    embed = {embed: {
      color: 16761035,
      title: nt.translations.help.title,
      description: nt.translations.help.description,
      fields: [
        {
          name: nt.translations.help.names.seriumium,
          value: nt.translations.help.values.seriumium.common
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
    }}
  } else if (nt.permissions === 4) {
    embed = {embed: {
      color: 16761035,
      title: nt.translations.help.title,
      description: nt.translations.help.description,
      fields: [
        {
          name: nt.translations.help.names.seriumium,
          value: nt.translations.help.values.seriumium.administrators
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
    }}
  }
  message.channel.send(embed)
}
