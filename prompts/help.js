module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  message.channel.send({embed: {
    color: 16761035,
    title: `Seriumium`,
    description: `**Support server:** [https://discord.gg/YzBZNQq](https://discord.gg/YzBZNQq)\n**Invite:** [Seriumium#2403](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)`,
    fields: [
      {
        name: `Everyone`,
        value: `avatar\ncircle\nhelp\nlibrary\nneko\nnt\nping\nprobability\nrequest\nsay`
      },
      {
        name: `Moderators`,
        value: `delete\nsayd`
      }
    ],
    footer: {
      text: `Seriumium (1.2.3 Idlen)`
    }
  }})
}
