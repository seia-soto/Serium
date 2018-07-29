const fs = require('fs')
module.exports = (client, message, nt) => {
  const notes = require('../../../stores').note
  if (nt.parameters[0]) {
    if (nt.parameters[0] === nt.i('create')) {
      const identificate = Math.floor(Math.random() * 9999) + 1
      let modifyed = notes
      modifyed[identificate] = nt.parameters.slice(1).join(' ')
      fs.writeFile('./stores/note/index.json', JSON.stringify(modifyed), (error) => {
        if (error) { console.error(error); return }
      })
      message.channel.send({embed: {
        color: 16761035,
        title: nt.i('note', true),
        description: nt.i('noteCreated').replace('{identificate}', identificate)
      }})
    } else {
      if (!notes[nt.parameters[0]]) {
        message.reply('There was no available note for identificate:' + nt.parameters[0])
        return
      }
      message.channel.send({embed: {
        color: 16761035,
        title: nt.i('note', true),
        description: notes[nt.parameters[0]]
      }})
    }
  } else {
    message.channel.send({embed: {
      color: 16761035,
      title: nt.i('note', true),
      description: nt.i('noteDescription'),
      fields: [
        {
          name: nt.i('create', true),
          value: nt.i('createNote')
        },
        {
          name: nt.i('open', true),
          value: nt.i('openNote')
        }
      ]
    }})
  }
}
