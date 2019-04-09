let Prompts = {
  // NOTE: Initialize construction.
}
let Categories = {
  // NOTE: Initialize construction.
}

// NOTE: Categorized
Categories.common = require('./common')
Categories.fine = require('./fine')

Object.values(Categories).forEach(category => {
  Object.values(category).forEach(prompt => {
    prompt.properties.category = category

    // NOTE: Push into array
    Prompts[prompt.properties.name] = prompt.properties
    Prompts[prompt.properties.name].require = prompt
  })
})

module.exports = Prompts
