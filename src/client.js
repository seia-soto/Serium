/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Discord = require('discord.js')

const handles = require('./handles')
const preferences = require('./preferences')

const client = new Discord.Client(preferences.client.options)

client.once('ready', () => {
  console.log(`Shard #${client.shard.id} > Listening events`)

  try {
    client.on('message', message => handles.message(client, message))
  } catch (error) {
    console.log(`Shard #${client.shard.id} > Error: ${error}`)
  }
})
client.login(preferences.client.token)

// NOTE: Additional tasks;
String.prototype.bind = function(parameters) {
  let text = this
  let keys = text.match(/\{(.*?)\}/g)

  if (!keys) return this

  keys.forEach(key => {
    const keyname = key.replace('{', '').replace('}', '')

    text = text.replace(key, parameters[keyname] || '')
  })

  return text
}
