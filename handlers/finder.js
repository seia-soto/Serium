module.exports.permissions = async (message) => {
  const moderatorRole = message.guild.roles.find(`name`, `.Moderators`)
  let depth = 0
  if (moderatorRole && message.member.roles.has(moderatorRole.id)) depth = 2
  if (message.author.id === `324541397988409355`) depth = 4
    return depth
}

module.exports.languages = async (message, accesspoints) => {
  const prompt = message.content.split(` `)[0].slice(accesspoints.Prefix.length)

  const defaultLanguage = `en`
  const languages = {
    아바타: `ko`,
    원: `ko`,
    삭제: `ko`,
    도움말: `ko`,
    라이브러리: `ko`,
    네코: `ko`,
    질의: `ko`,
    확률: `ko`,
    요청: `ko`
  }
  const alternativeLanguage = languages[`${prompt}`] || defaultLanguage
  return alternativeLanguage
}
