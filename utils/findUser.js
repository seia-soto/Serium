const findUser = (members, toFind) => {
  toFind = (toFind || '').toLowerCase()

  const byUsername = members.filter(member => member.user.username.toLowerCase().includes(toFind)).first()
  const byTag = members.filter(member => member.user.tag.toLowerCase() === toFind).first()
  const byNickname = members.filter(member => (member.nickname || '').toLowerCase().includes(toFind)).first()

  return byUsername || byTag || byNickname || null
}

module.exports = findUser
