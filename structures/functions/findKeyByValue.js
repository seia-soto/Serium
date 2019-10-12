module.exports = (objective, value) => {
  return Object.keys(objective).find(key => objective[key] === value)
}
