module.exports = (client, message, data, translate) => {
  message.channel.send({embed: {
    color: data.application.embed.color,
    title: translate.invite.title,
    description: translate.invite.description,
    url: data.application.client.invite
  }})
}
