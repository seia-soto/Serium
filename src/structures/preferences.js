/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const fastEquals = require('fast-equals')

const preferencesRepository = require('../preferences')
const database = require('./database')

const defaults = preferencesRepository.client.defaults

const set = async options => {
  const statement = await database.execute(
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
  const statement = await database.execute(
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

  preferences._previous = new Object()

  preferences.set = set
  preferences.update = update

  preferences.user = await database.execute(
    'SELECT * FROM `' + preferencesRepository.database.prefix + preferencesRepository.database.tables.users + '` WHERE identify = ?',
    [Number(identify.user)]
  )
  preferences.guild = await database.execute(
    'SELECT * FROM `' + preferencesRepository.database.prefix + preferencesRepository.database.tables.guilds + '` WHERE identify = ?',
    [Number(identify.guild)]
  )

  // NOTE: Destructure;
  preferences.user = preferences._previous.user = ((preferences.user[0] || new Array())[0] || new Object()).preferences
  preferences.guild = preferences._previous.guild = ((preferences.guild[0] || new Array())[0] || new Object()).preferences

  if (typeof preferences.user === 'string') {
    preferences.user = preferences._previous.user = JSON.parse(preferences.user)
  }
  if (typeof preferences.guild === 'string') {
    preferences.guild = preferences._previous.guild = JSON.parse(preferences.guild)
  }

  preferences.user.language = preferences.user.language || defaults.language

  preferences.guild.prefix = preferences.guild.prefix || defaults.prefix
  preferences.guild.features = preferences.guild.features || defaults.features

  if (!fastEquals.deepEqual(preferences._previous.user, preferences.user)) {
    preferences.set({
      type: 'users',
      identify: identify.user,
      context: preferences.user
    })
  }
  if (!fastEquals.deepEqual(preferences._previous.gulid, preferences.gulid)) {
    preferences.set({
      type: 'guilds',
      identify: identify.gulid,
      context: preferences.gulid
    })
  }

  return preferences
}

module.exports.get = getPreferences
module.exports.set = set
module.exports.update = update
