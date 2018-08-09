module.exports = (client, message, nt) => {
  const make = {
    fullwidth: (string) => {
      return new require('./ascii-fullwidth-halfwidth-convert.js')().toFullWidth(string)
    },
    halfwidth: (string) => {
      return new require('./ascii-fullwidth-halfwidth-convert.js')().toHalfWidth(string)
    },
    uppercase: (string) => {
      return string.toUpperCase(string)
    },
    lowercase: (string) => {
      return string.toLowerCase(string)
    },
    plaintext: (string) => {
      return
    }
  }
  message.channel.send
}
