const translations = require('./translations')

let filter = []

module.exports = (client, message, data) => {
  const translate = translations[options.user.language]
  if (filter.includes(message.author.id)) {
    return message.reply(translate.limitted)
  } else {
    filter.push(message.author.id)
      .then(() => setTimeout(() => filter.splice(filter.indexOf(message.author.id), 1)), data.application.thirdparties.usageLimitter.timeout)
  }
}
