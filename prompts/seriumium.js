let options = {
  permissions: 3
}
exports.options = options

exports.execute = async (client, message, presets) => {
  switch (presets.arguments[0]) {
    case `exit`:
      process.exit(0)
      break;
    default:
      message.reply(`No entries`)
  }
}
