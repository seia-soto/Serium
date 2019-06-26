/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const preferencesRepository = require('../preferences')
const databasePool = require('./databasePool')

const defaults = preferencesRepository.client.defaults

const set = async options => {
  const statement = await databasePool.execute(
    'INSERT INTO `' + preferencesRepository.database.prefix + preferencesRepository.database.tables[options.type] + '`' +
    '(idx, identify, preferences) VALUES (0, ?, ?)',
    [
      options.identify,
      JSON.stringify(options.context)
    ]
  )
  return statement
}
const update = async options => {
  const statement = await databasePool.execute(
    'UPDATE `' + preferencesRepository.database.prefix + preferencesRepository.database.tables[options.type] + '`' +
    'SET preferences = ? WHERE identify = ?',
    [
      JSON.stringify(options.context),
      options.identify
    ]
  )
  return statement
}

const getPreferences = async identify => {
  const preferences = new Object()

  preferences.set = set
  preferences.update = update

  preferences.user = await databasePool.execute(
    'SELECT * FROM `' + preferencesRepository.database.prefix + preferencesRepository.database.tables.users + '` WHERE identify = ?',
    [identify.user]
  )
  preferences.guild = await databasePool.execute(
    'SELECT * FROM `' + preferencesRepository.database.prefix + preferencesRepository.database.tables.guilds + '` WHERE identify = ?',
    [identify.guild]
  )

  // NOTE: Destructure;
  preferences.user = preferences.user[0].preferences
  preferences.guild = preferences.guild[0].preferences

  if (!preferences.user) {
    preferences.user = new Object()
    preferences.user.language = defaults.language

    preferences.set({
      type: 'users',
      identify: identify.user,
      context: preferences.user
    })
    preferences.user = JSON.stringify(preferences.user)
  }
  if (!preferences.guild) {
    preferences.guild = new Object()
    preferences.guild.prefix = defaults.prefix

    preferences.set({
      type: 'guilds',
      identify: identify.guild,
      context: preferences.guild
    })
    preferences.guild = JSON.stringify(preferences.guild)
  }

  preferences.user = JSON.parse(preferences.user)
  preferences.guild = JSON.parse(preferences.guild)

  return preferences
}

module.exports = getPreferences
