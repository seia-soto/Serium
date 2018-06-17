const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const subjects = require('../../../stores').endpoints.nekos_dot_life
  const flags = {
    sfw: '`tickle`, `slap`, `poke`, `pat`, `neko`, `meow`, `lizard`, `kiss`, `hug`, `foxgirl`, `feed`, `cuddle`, `why`, `cattext`, `owoify`, `8ball`, `fact`, `chat`, `nekogif`, `kemonomimi`, `holo`, `erofeet`',
    all: '`tickle`, `slap`, `poke`, `pat`, `neko`, `meow`, `lizard`, `kiss`, `hug`, `foxgirl`, `feed`, `cuddle`, `why`, `cattext`, `owoify`, `8ball`, `fact`, `chat`, `nekogif`, `kemonomimi`, `holo`, `erofeet`, `ramdomhentaigif`, `pussy`, `nekogif`, `neko`, lesbian`, `kuni`, `cumsluts`, `classic`, `boobs`, `bj`, `anal`, `analarts`, `yuri`, `trap`, `tits`, `girlsologif`, `girlsolo`, `smallboobs`, `pussywankgif`, `pussyart`, `kemonomimi`, `kitsune`, `keta`, `holo`, `holoero`, `hentai`, `futanari`, `femdom`, `feetgif`, `feet`, `ero`, `erokitsune`, `eroneko`, `eroyuri`, `cumarts`, `blowjob`, `pussygif`'
  }
  let endpoint = 'https://nekos.life/api/v2/img/neko'
  let allowed = 'sfw'
  if (message.channel.nsfw === true) {
    allowed = 'all'
  }
  if (nt.arguments[0]) {
    if (nt.arguments[0].toLowerCase() === 'flags') {
      message.channel.send({embed: {
        color: 16761035,
        title: 'Neko',
        description: '**Available properties**: ' + flags[allowed],
        footer: {
          text: 'To use NSFW images, use this prompt in NSFW channel.'
        }
      }})
      return
    }
    if (subjects[allowed][nt.arguments[0].toLowerCase()]) {
      endpoint = 'https://nekos.life/api/v2' + subjects[allowed][nt.arguments[0].toLowerCase()]
    }
  }
  try {
    request(endpoint, (error, response, body) => {
      if (error) { message.reply(error); return }
      const result = JSON.parse(body)
      message.reply(result.url)
    })
  } catch (error) {
    message.reply(nt.i('parseError_fromRemote'))
    return
  }
}
