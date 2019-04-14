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
// Unlink due to issue: https://github.com/discordjs/discord.js/issues/3205; Categories.music = require('./music')
Categories.nsfw = require('./nsfw')

Object.values(Categories).forEach(category => {
  Object.values(category).forEach(prompt => {
    prompt.properties.category = category

    // NOTE: Push into array
    Prompts[prompt.properties.name] = prompt.properties
    Prompts[prompt.properties.name].require = prompt
  })
})

module.exports = Prompts
