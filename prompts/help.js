module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  message.channel.send({embed: {
    color: 16761035,
    title: `Help`,
    description: `**Support server:** [Seriumium by Let#5959](https://discord.gg/YzBZNQq)\n**Invite:** [Seriumium#2403](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)`,
    fields: [
      {
        name: `Common`,
        value: `\`ping\` \`say\` \`help\``
      },
      {
        name: `Moderations`,
        value: `\`delete\``
      },
      {
        name: `About`,
        value: `\`serverinfo\` \`wikipedia\``
      },
      {
        name: `Images`,
        value: `\`avatar\` \`neko\``
      },
      {
        name: `Functions`,
        value: `\`circle\` \`request\` \`sayd\``
      }
    ],
    footer: {
      text: `Seriumium (1.2.2 Idlen)`
    }
  }})
}
