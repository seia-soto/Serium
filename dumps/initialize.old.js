switch (type) {
  case `strict`:
    prompts.set(`avatar`, prompt.avatar)
    prompts.set(`circle`, prompt.circle)
    prompts.set(`delete`, prompt.delete)
    prompts.set(`help`, prompt.help)
    prompts.set(`library`, prompt.library)
    prompts.set(`neko`, prompt.neko)
    prompts.set(`nt`, prompt.nt)
    prompts.set(`ping`, prompt.ping)
    prompts.set(`probability`, prompt.probability)
    prompts.set(`request`, prompt.request)
    prompts.set(`say`, prompt.say)
    prompts.set(`sayd`, prompt.sayd)
    prompts.set(`seriumium`, prompt.seriumium)
    prompts.set(`아바타`, prompt.avatar)
    prompts.set(`원`, prompt.circle)
    prompts.set(`삭제`, prompt.delete)
    prompts.set(`도움말`, prompt.help)
    prompts.set(`라이브러리`, prompt.library)
    prompts.set(`네코`, prompt.neko)
    prompts.set(`질의`, prompt.ping)
    prompts.set(`확률`, prompt.probability)
    prompts.set(`요청`, prompt.request)
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
