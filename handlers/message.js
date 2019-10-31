const structures = require('../structures')
const translations = require('../translations')
const config = require('../config')

const commands = require('../commands')

module.exports = async (client, message) => {
  if (message.channel.type === 'dm') return

  const permissions = await structures.permissions.accumulate(message.member)
  const settings = {
    user: await structures.settings.get.user(message.member.id),
    guild: await structures.settings.get.guild(message.guild.id)
  }

  message.command = await message.content.replace(config.app.ux.prefix, '').split(' ').filter(a => a !== '')
  message.parameters = message.command.splice(1)

  const basicCondition =
    (message.content.startsWith(settings.guild.prefix)) &&
    (
      !config.app.ux.basicPermissions.length ||
      config.app.ux.basicPermissions.every(permission => message.guild.me.permissions.toArray().includes(permission))
    ) &&
    /*
      NOTE: You may change rule like below to support only one basic permissions:
        (message.guild.me.hasPermission('SEND_MESSAGES'))
    */
    (commands[message.command])
  if (!basicCondition) return

  const filters = {
    missingPermission: !structures.permissions.compare(permissions, commands[message.command].properties.permission.flag)
  }
  const filtered = await structures.functions.findKeyByValue(filters, false)

  if (filtered) return message.reply(translations[settings.user.language].general.filtered[filtered])

  const opts = {
    permissions,
    settings,
    translations: translations[settings.user.language].commands[commands[message.command].properties.name]
  }

  opts.translations = opts.translations || {}
  opts.translations._metadata = {
    language: translations[settings.user.language].language,
    languageNative: translations[settings.user.language].languageNative,
    languageCode: translations[settings.user.language].languageCode,
    countryCode: translations[settings.user.language].countryCode
  }

  commands[message.command].execute(client, message, opts)
}
