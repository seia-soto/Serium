/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
const Discord = require('discord.js')
const os = require('os')

const preferences = require('./preferences')

if (preferences.client.sharding) {
  try {
    preferences.client.shards.totalShards = (preferences.client.shards.totalShards || os.cpus().length)
    preferences.client.shards.token = preferences.client.shards.token || preferences.client.token

    const shards = new Object()
    const manager = new Discord.ShardingManager('./client.js', preferences.client.shards)

    const registerShard = shard => {
      console.log(`ShardingManager > Spawned #${shard.id}`)
      shards[shard.id] = shard

      shard.on('ready', () => {
        console.log(`Shard #${shard.id} > Ready and listening events`)
      })

      if (Object.values(shards).length === preferences.client.shards.totalShards) {
        console.log(`ShardingManager > Spawned all shards`)
      }
    }
    const handleMessage = (shard, message) => {
      switch (message) {
        case 'update':
          console.log(`Shard #${shard.id} > Recieved update signal`)
          console.log(`Serium > Updating services`)

          Object.values(shards).forEach((oldShard, i) => {
            setTimeout(() => {
              manager.createShard(oldShard.id).then(newShard => {
                newShard.on('ready', () => {
                  console.log(`ShardingManager > Updated service #${newShard.id}(prototype: #${oldShard.id}) is ready and killing previous shard`)

                  oldShard.kill()
                  registerShard(newShard)
                })
              })
            }, i * preferences.client.shardingDelay)
          })
          break;
        default:
          console.log(`Shard #${shard.id} > MESSAGE(filtered as unknown): ${message}`)
      }
    }

    manager.spawn(preferences.client.shards.totalShards, preferences.client.shardingDelay)

    console.log(`ShardingManager > Launching total ${preferences.client.shards.totalShards} shards`)

    manager.on('launch', registerShard)
    manager.on('message', handleMessage)
  } catch (error) {
    console.error(`Master > Error: ${error}`)
  }
} else {
  require('./client')
}
