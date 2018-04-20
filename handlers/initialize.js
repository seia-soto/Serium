const Fs = require(`fs`)

const prompt = require(`../prompts`)

module.exports.prompts = (type, prompts) => {
  switch (type) {
    case `straight`:
      prompts.set(`avatar`, prompt.avatar)
      prompts.set(`circle`, prompt.circle)
      prompts.set(`delete`, prompt.delete)
      prompts.set(`help`, prompt.help)
      prompts.set(`library`, prompt.library)
      prompts.set(`ping`, prompt.ping)
      prompts.set(`request`, prompt.request)
      prompts.set(`say`, prompt.say)
      prompts.set(`sayd`, prompt.sayd)
      prompts.set(`seriumium`, prompt.seriumium)
      break
    case `dynamic`:
      Fs.readdir(`./prompts/`, (error, promptbases) => {
        if (error) console.error(error)
        promptbases.forEach(promptbases => {
          if (promptbases.match(/index/)) return
          let base = require(`../prompts/${promptbases}`)
          prompts.set(promptbases.split(`.js`)[0], base)
        })
      })
      break
  }
  console.log(`Initialized prompts: ${new Date()}`)
}
