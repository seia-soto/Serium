exports.permissions = async (message) => {
  const moderatorRole = message.guild.roles.find(`name`, `.Moderators`)
  let depth = 0
  if (moderatorRole && message.member.roles.has(moderatorRole.id)) depth = 2
  if (message.author.id === `324541397988409355`) depth = 4
    return depth
}
