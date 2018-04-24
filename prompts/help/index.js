module.exports.permissions = 0
module.exports.execute = (client, message) => {
  message.channel.send({embed: {
    color: 16761035,
    title: `Seriumium`,
    description: 'by <@324541397988409355> code with heart',
    fields: [
      {
        name: 'Support',
        value: '[Support server](https://discord.gg/YzBZNQq)\n[Invite Seriumium#2403](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot\n[GitHub](https://github.com/seriumium/seriumiumDiscord/)\n[Webpage](https://seriumium.github.io))'
      },
      {
        name: 'Prompts',
        vale: '`avatar` `delete` `help` `library` `ping` `probability` `say` `sayd`'
      }
    ],
    footer: {
      text: `Seriumium (1.2.4 Idlen)`
    }
  }})
}
