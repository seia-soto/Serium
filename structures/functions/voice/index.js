const { createReadStream } = require('fs')

let handles = {}

module.exports = class {
  constructor(message) {
    this.identificate = message.guild.id

    if (!handles[this.identificate]) {
      handles[this.identificate] = {
        voiceChannel: message.member.voiceChannel,
        dispatcher: null,
        playing: false
      }
    }
  }

  dispatcher() {
    return handles[this.identificate].dispatcher
  }
  playing() {
    return handles[this.identificate].playing
  }

  join() {
    if (handles[this.identificate].playing) return
    handles[this.identificate].voiceChannel.join()
  }
  leave() {
    this.end()
    handles[this.identificate].voiceChannel.leave()
  }

  stream(input) {
    handles[this.identificate].dispatcher = handles[this.identificate].voiceChannel.connection.playStream(input)
    handles[this.identificate].dispatcher.setBitrate(96)

    handles[this.identificate].playing = true
  }
  pause() {
    handles[this.identificate].dispatcher.pause()
  }
  resume() {
    if (handles[this.identificate].dispatcher.paused) handles[this.identificate].dispatcher.resume()
  }
  at() {
    return handles[this.identificate].dispatcher.time
  }
  end() {
    handles[this.identificate].dispatcher.end()
    handles[this.identificate] = undefined
  }
}
