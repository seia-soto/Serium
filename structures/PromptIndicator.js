const PromptSources = require('@prompts')

Object.values(PromptSources).forEach(category => {
  Object.keys(category).forEach(prompt => {
    const source = category[prompt]

    module.exports[prompt] = source

    if (source.properties.alias) {
      source.properties.alias.forEach(alternative => module.exports[alternative] = source)
    }
  })
})
