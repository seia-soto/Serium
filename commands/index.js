const config = require('../config')

const categories = {}

categories.common = require('./common')

Object.keys(categories).forEach(categoryName => {
  const category = categories[categoryName]

  Object.values(category).forEach(command => {
    command.properties.category = categoryName
    command.properties.permission =
      config.permissions.find(permission => permission.name === command.properties.permission)

    module.exports[command.properties.name] = command

    const aliases = command.properties.aliases || []

    aliases.forEach(alias => {
      module.exports[alias] = command
    })
  })
})
