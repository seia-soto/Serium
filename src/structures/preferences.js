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
  const preferences = {}

  preferences.set = set
  preferences.update = update

  preferences.user = await database.query(
    'SELECT * FROM `' + preferencesRepository.database.prefix + preferencesRepository.database.tables.users + '` WHERE identify = ?',
    [Number(identify.user)]
  )
  preferences.guild = await database.query(
    'SELECT * FROM `' + preferencesRepository.database.prefix + preferencesRepository.database.tables.guilds + '` WHERE identify = ?',
    [Number(identify.guild)]
  )

  if (!preferences.user.error) {
    preferences.user = JSON.parse(preferences.user.data)
  }
  if (!preferences.guild.error) {
    preferences.guild = JSON.parse(preferences.guild.data)
  }

  preferences.user.language = preferences.user.language || defaults.language

  preferences.guild.prefix = preferences.guild.prefix || defaults.prefix
  preferences.guild.features = preferences.guild.features || defaults.features

  return preferences
}

module.exports.get = getPreferences
module.exports.set = set
module.exports.update = update
