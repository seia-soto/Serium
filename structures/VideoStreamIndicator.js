const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')

const InPath = path.join(__dirname, '../assets/videos/')

const VideoStreamIndicator = url => {
  return new Promise((resolve, reject) => {
    if (!ytdl.validateURL(url)) {
      reject('INVALID_URL')
    }

    ytdl.getInfo(url).then(video => {
      const path = `${InPath}${video.video_id}`

      if (fs.existsSync(path)) {
        resolve(fs.createReadStream(path))
      } else {
        ytdl(url, { filter: 'audioonly' })
          .pipe(fs.createWriteStream(path))
          .on('finish', () => resolve(fs.createReadStream(path)))
      }
    }).catch(error => {
      console.error('VideoStreamIndicator:', error)

      reject(error)
    })
  })
}

module.exports = VideoStreamIndicator
