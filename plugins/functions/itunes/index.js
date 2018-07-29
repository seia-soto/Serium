const Discord = require('discord.js')
const request = require('request')
module.exports = (client, message, nt) => {
  const endpoint = 'https://itunes.apple.com/search?term=' + encodeURIComponent(nt.parameters.slice(0).join(' '))
  if (nt.parameters[0]) {
    try {
      request(endpoint, (error, response, body) => {
        if (error) { message.reply(error); return }
        const result = JSON.parse(body)
        if (result.resultCount === 0) {
          message.reply(nt.i('noResult'))
          return
        }
        const output = result.results[0]
        const embed = new Discord.RichEmbed()
          .setColor(16761035)
          .setTitle(nt.i('itunes'))
          .setThumbnail(output.artworkUrl60)
          .addField(nt.i('type', true),
          output.wrapperType + ', ' + output.kind, true)
          .addField(nt.i('about', true),
          '**[' + nt.i('artist', true) + '](' + output.artistViewUrl  +')** ' + output.artistName +
          '\n**[' + nt.i('collection', true) + '](' + output.collectionViewUrl + ')** ' + output.collectionName +
          '\n**[' + nt.i('track', true) + '](' + output.trackViewUrl + ')** ' + output.trackName, true)
        message.channel.send({embed})
      })
    } catch (error) {
      message.reply(nt.i('parseError_fromRemote'))
    }
  } else {
    message.reply(nt.i('emptyParameter'))
  }
}
