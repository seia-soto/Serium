const { createReadStream } = require('fs')

module.exports = class {
  constructor(message) {
    this.identificate = message.guild.id

    this.handle = {
      voiceChannel: message.member.voiceChannel,
      dispatcher: null,
      playing: false
    }
  }

  dispatcher() {
    return this.handle.dispatcher
  }
  playing() {
    return this.handle.playing
  }

  join() {
    if (this.handle.playing) return
    this.handle.voiceChannel.join()
  }
  leave() {
    this.end()
    this.handle.voiceChannel.leave()
  }

  stream(input) {
    this.handle.dispatcher = this.handle.voiceChannel.connection.playStream(input)
    this.handle.dispatcher.setBitrate(96)

    this.handle.playing = true
  }
  pause() {
    this.handle.dispatcher.pause()
  }
  resume() {
    if (this.handle.dispatcher.paused) this.handle.dispatcher.resume()
  }
  at() {
    return this.handle.dispatcher.time
  }
  end() {
    this.handle.dispatcher.end()
    this.handle = undefined
  }
}
