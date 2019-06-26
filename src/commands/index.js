const categories = new Object()

categories.common = require('./common')

Object.keys(categories).forEach(categoryName => {
  const category = categories[categoryName]

  Object.values(category).forEach(command => {
    module.exports[command.properties.name] = command

    command.properties.aliases.forEach(alias => module.exports[alias] = command)
  })
})
