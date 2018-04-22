module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  message.channel.send({embed: {
    color: 16761035,
    title: `Seriumium`,
    description: presets.language.help.description,
    fields: [
      {
        name: `Seriumium`,
        value: `\`help\` \`nt\` \`seriumium\``
      },
      {
        name: presets.language.help.fields.Moderations,
        value: `\`delete\` \`sayd\``
      },
      {
        name: presets.language.help.fields.Images,
        value: `\`avatar\` \`neko\``
      },
      {
        name: presets.language.help.fields.Library,
        value: `\`circle\` \`library\` \`ping\` \`probability\` \`request\` \`say\``
      }
    ],
    footer: {
      text: `Seriumium (1.2.3 Idlen)`
    }
  }})
}
