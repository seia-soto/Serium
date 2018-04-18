exports.permissions = async (message) => {
  let depth = 0
  let moderator_role = message.guild.roles.find(`name`, `.Moderators`)
  if (moderator_role && message.member.roles.has(moderator_role.id)) depth = 2
  if (message.author.id === `324541397988409355`) depth = 4
    return depth
}
