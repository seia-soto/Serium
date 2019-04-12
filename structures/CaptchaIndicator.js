const buffer = require('buffer')
const svgCaptcha = require('svg-captcha')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const PreferenceIndicator = require('./PreferenceIndicator')

const {Buffer} = buffer

const InPath = path.join(__dirname, '../assets/captcha/')

const CaptchaManager = deprecation => {
  return new Promise((resolve, reject) => {
    const internalURI = Date.now()
    const captcha = svgCaptcha.create(PreferenceIndicator.App.Captcha)
    const imageBuffer = Buffer.from(captcha.data)

    sharp(imageBuffer)
      .flatten({ background: '#ffffff' })
      .png()
      .toFile(`${InPath}${internalURI}.png`, error => {
        resolve({
          uri: `${InPath}${internalURI}.png`,
          solution: captcha.text
        })
      })
  })
}

module.exports = CaptchaManager
