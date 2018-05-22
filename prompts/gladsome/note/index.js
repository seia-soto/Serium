const fs = require('fs')
module.exports.permissions = 0
module.exports.execute = (client, message, nt) => {
  const notes = require('../../../data/prompts/note/index.json')
  const translate = nt.i('notes')
  if (nt.arguments[0]) {
    if (nt.arguments[0] === nt.i('create')) {
      const identificate = Math.floor(Math.random() * 9999) + 1
      let modifyed = notes
      modifyed[identificate] = nt.arguments.slice(1).join(' ')
      fs.writeFile('./data/prompts/note/index.json', JSON.stringify(modifyed), (error) => {
        if (error) { console.error(error); return }
      })
      message.channel.send({embed: {
        color: 16761035,
        title: translate.title,
        description: translate.created + ' **' + identificate + '**' + translate.is + '.'
      }})
    } else {
      if (!notes[nt.arguments[0]]) {
        message.reply('There was no available note for identificate:' + nt.arguments[0])
        return
      }
      message.channel.send({embed: {
        color: 16761035,
        title: translate.title,
        description: notes[nt.arguments[0]]
      }})
    }
  } else {
    message.channel.send({embed: {
      color: 16761035,
      title: translate.title,
      description: translate.description,
      fields: [
        {
          name: nt.i('create'),
          value: translate.how.create
        },
        {
          name: nt.i('open'),
          value: translate.how.open
        }
      ]
    }})
  }
}
