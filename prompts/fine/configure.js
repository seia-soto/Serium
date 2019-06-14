const structures = require('@structures')

const {CaseSensitive, EndPreferenceIndicator} = structures

const Prompt = (message, client) => {
  const namespaces = message._se.translates.namespaces

  EndPreferenceIndicator.getGuildSettings(message.guild.id).then(preference => {
    // NOTE: View of current per server preference.
    let embed = {
      embed: {
        title: message.guild.name,
        description: message._se.translates.configurationTip,
        fields: [
          {
            name: message._se.translates.extendedAs.prompt,
            value: ''
          },
          {
            name: message._se.translates.extendedAs.event,
            value: ''
          }
        ]
      }
    }

    const preferenceEntries = Object.entries(preference)
    // NOTE: Example output; typeof _Array~ [[preferenceName, value], ...*[ <preferences> ]]

    preferenceEntries.forEach(preferenceEntry => {
      // NOTE: 0 means extended as command.
      const preferenceExtendedType = (preferenceEntry[0].startsWith('prompt.')) ? 0 : 1

      embed.embed.fields[preferenceExtendedType].value += `**${namespaces[preferenceEntry[0]]}(${preferenceEntry[0]})** ${CaseSensitive(preferenceEntry[1])}\n`
    })
    message.channel.send(embed)
  }).catch(error => {
    console.error(error)

    message.reply(message._se.translates._errors.databaseFailure)
  })
}
const Properties = {
  name: 'configure',
  usage: 'configure',

  requiredPermission: 'staff'
}

module.exports = Prompt
module.exports.properties = Properties
