const ytdl = require('ytdl-core')

const Handles = new Map()

module.exports = class {
  constructor(identificate, voiceChannel) {
    if (!Handles.get(identificate)) {
      Handles.set(identificate, {
        voiceChannel: voiceChannel,
        queue: [],
        playing: false
      })
    }
  }

  start(identificate) {
    if (!Handles.get(identificate).playing) return this.startStream(identificate)
  }
  next(identificate) {
    if (this.getQueue(identificate)) {
      this.startStream(identificate)
    } else {
      this.endStream(identificate)
    }
  }

  getQueue(identificate) {
    const latest = Handles.get(identificate).queue[0]

    if (latest) {
      return latest
    } else {
      return false
    }
  }
  addQueue(identificate, videoURL) {
    Handles.get(identificate).queue.push(videoURL)
  }
  removeQueue(identificate, index) {
    Handles.get(identificate).queue.splice(index, 1)
  }

  startStream(identificate) {
    Handles.get(identificate).voiceChannel.join()
    if (Handles.get(identificate).playing) return

    const stream = ytdl(this.getQueue(identificate), {
      quality: 'highest',
      filter: 'audioonly'
    })
      .on('error', error => {
        return `0;${error}`
      })
    const dispatcher = Handles.get(identificate).voiceChannel.connection.playStream(stream)

    Handles.get(identificate).playing = true
    this.removeQueue(identificate, 0)

    dispatcher.setBitrate(96)
    dispatcher.on('end', () => {
      Handles.get(identificate).playing = false
      this.next(identificate)
    })
  }
  endStream(identificate) {
    Handles.get(identificate).voiceChannel.connection.dispatcher.end()
    Handles.get(identificate).voiceChannel.leave()
  }
  pauseStream(identificate) {
    Handles.get(identificate).voiceChannel.connection.dispatcher.pause()
  }
  resumeStream(identificate) {
    Handles.get(identificate).voiceChannel.connection.dispatcher.resume()
  }
}
