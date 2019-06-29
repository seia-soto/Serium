/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const categories = new Object()

categories.common = require('./common')
categories.serium = require('./serium')

Object.keys(categories).forEach(categoryName => {
  const category = categories[categoryName]

  Object.values(category).forEach(command => {
    module.exports[command.properties.name] = command
    module.exports[command.properties.name].properties.category = categoryName

    command.properties.aliases.forEach(alias => {
      module.exports[alias] = command
      module.exports[alias].properties.category = categoryName
      // NOTE: Check this command is alias
      module.exports[alias].properties.alias = true
    })
  })
})
