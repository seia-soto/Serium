let Prompts = {
  // NOTE: Initialize construction.
}
let Categories = {
  // NOTE: Initialize construction.
}

// NOTE: Categorized
Categories.common = require('./common')
Categories.fine = require('./fine')
Categories.images = require('./images')
Categories.nsfw = require('./nsfw')
Categories.utilizes = require('./utilizes')

Object.values(Categories).forEach(category => {
  Object.values(category).forEach(prompt => {
    prompt.properties.category = category

    // NOTE: Push into array
    Prompts[prompt.properties.name] = prompt.properties
    Prompts[prompt.properties.name].require = prompt

    const aliasList = prompt.properties.alias || []

    aliasList.forEach(alias => {
      Prompts[alias] = Prompts[prompt.properties.name]
    })
  })
})

module.exports = Prompts
