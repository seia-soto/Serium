let options = {
  permissions: 0,
  interprete: [`help`, `도움말`]
}
exports.options = options

exports.execute = async (client, message, presets) => {
  message.channel.send({embed: {
    color: 16761035,
    title: `**Help**`,
    description: `This is the list of our application(bot: seriumium)'s prompt. If you want to use prompts for moderators, add **.Moderators** role to yourself. under-lined prompt is for only moderators.
\n__**Circle**__ Returns you circle circumference and area about radius
__**Delete**__ bulk delete messages, up to 45 messages/request
**Help** the application's documentations
**Library** search wikipedia and returns short version of document
**Ping** checked the leaked time of respones
**Request** request the web-site and return body
**Say** the application will reply with your message
__**Sayd**__ the application will send your message and delete your message at same time
\n[GitHub](https://github.com/seriumium)\n[Webpage](https://seriumium.github.io)\n[Join to support server](https://discord.gg/YzBZNQq)\n[Invite seriumium](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)`,
    footer: {
      text: `Nightly: Seriumium: Idlen, 1.1.8`
    }
  }})
}
