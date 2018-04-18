let options = {
  permissions: 3
}
exports.options = options

exports.execute = async (client, message, presets) => {
  switch (presets.arguments[0]) {
    case `exit`:
      message.reply(`Process will exit with code zero`)
      process.exit(0)
      break;
    default:
      message.reply(`No entries`)
  }
}
