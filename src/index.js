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

    const manager = new Discord.ShardingManager('./client.js', preferences.client.shards)

    process.on('SIGINT', () => {
      console.log('Serium > Stopping...')

      manager.shards.forEach((shard, i) => {
        console.log(`ShardingManager > Killing shard #${i}`)

        shard.kill()
      })

      // NOTE: Exit.
      process.exit(0)
    })

    const registerShard = shard => {
      console.log(`ShardingManager > Spawned #${shard.id}`)
    }
    const handleMessage = (shard, message) => {
      switch (message) {
        case 'update':
          console.log(`Shard #${shard.id} > Recieved update signal`)
          console.log(`Serium > Updating services`)

          manager.shards.forEach((oldShard, i) => {
            setTimeout(() => {
              manager.createShard(i).then(newShard => {
                newShard.on('ready', () => {
                  console.log(`ShardingManager > Updated service #${i} is ready and killing previous shard`)

                  oldShard.kill()
                })
              })
            }, (i * preferences.client.shardingDelay) + preferences.client.shardingDelay)
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
