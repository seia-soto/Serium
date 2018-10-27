const request = require('request')
const ytdl = require('ytdl-core')

const properties = require('../../scopes/properties')
const { voice, queue } = require('../../structures/functions')

module.exports = (client, message, data, translate) => {
  const required = {
    keyword: data.message.index.raw.slice(1).join(' ')
  }
  const requirements = [
    (required.keyword) ||
    (message.member.voiceChannel)
  ]
  if (requirements.includes(false)) return message.reply('Test failed')

  const party = new voice(message)
  party.join()

  const form = {
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${properties.thridparty.youtube}&q=${encodeURIComponent(required.keyword)}`,
    headers: {
      'User-Agent': 'Seia-Deployment/Serium (v2)'
    }
  }

  request(form, (error, response, body) => {
    const result = JSON.parse(body)
    let recall = false
    if (result.items) {
      recall = result.items[0].id.videoId
    } else {
      return message.reply('failed')
    }

    if (recall !== false) {
      let queue = data.stores.thridparty.music.queue
      if (!queue[message.guild.id]) queue[message.guild.id] = []

      const playback = () => {
        queue[message.guild.id].push(recall)

        const identificate = queue[message.guild.id][0]
        queue[message.guild.id].splice(0)
        data.assets.emit('modified', 'music/queue', queue)

        const input = ytdl(`https://www.youtube.com/watch?v=${identificate}`, { filter: 'audioonly' })
        party.join()
        party.stream(input)

        if (queue[message.guild.id][0]) playback()
      }
      playback()
    }
  })
}
