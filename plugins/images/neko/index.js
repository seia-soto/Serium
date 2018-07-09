const request = require('request')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  let queryOptions
  if (message.channel.nsfw) {
    const termsNSFW = [
      'Random_hentai_gif',
      'pussy',
      'nsfw_neko_gif',
      'lewd',
      'les',
      'kuni',
      'cum',
      'classic',
      'boobs',
      'bj',
      'anal',
      'anal_jpg',
      'yuri',
      'trap',
      'tits',
      'solog',
      'solo',
      'smallboobs',
      'pwankg',
      'pussy_jpg',
      'lewdkemo',
      'lewdk',
      'keta',
      'holoewd',
      'holoero',
      'hentai',
      'futanari',
      'femdom',
      'feetg',
      'feet',
      'ero',
      'erok',
      'erokemo',
      'eroyuri',
      'cum_jpg',
      'blowjob',
      'pussy'
    ]
    queryOptions = termsNSFW[Math.floor(Math.random() * termsNSFW.length)]
  } else {
    const termsSFW = [
      'tickle',
      'slap',
      'poke',
      'pat',
      'neko',
      'meow',
      'lizard',
      'kiss',
      'hug',
      'foxgirl',
      'feed',
      'cuddle',
      'ngif',
      'kemonomimi',
      'holo',
      'erofeet'
    ]
    queryOptions = termsSFW[Math.floor(Math.random() * termsSFW.length)]
  }
  try {
    request('https://nekos.life/api/v2/img/' + queryOptions, (error, response, body) => {
      const result = JSON.parse(body).url
      if (result === undefined) { return message.reply(nt.i('noResult')) }
      message.reply('?!', {files: [result]})
    })
  } catch (error) {
    return message.reply(error)
  }
}
