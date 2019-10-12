const { ShardingManager } = require('discord.js')

const config = require('./config')

const manager = new ShardingManager('./client.js', {
  token: config.app.token,
  totalShards: config.app.fork.quantity,
  respawn: config.app.fork.automaticRespawn,
  shardArgs: config.app.fork.arguments
})

manager.on('launch', shard => {
  console.log(`[ShardingManager] The shard#${shard.id} was started just now.`)
})
manager.on('message', (shard, message) => {
  if (typeof message === 'object' && message !== null) {
    switch (message.type) {
      case 'debug':
        console.log(`[Shard#${shard.id}] DEBUG > ${message.content}`)
        break
      case 'broadcast':
        console.log(`[Shard#${shard.id}] Broadcasting message > ${message.content}`)

        manager.broadcast(message.content)
        break
      case 'broadcastEval':
        console.log(`[Shard#${shard.id}] Broadcasting eval > ${message.content}`)

        manager.broadcastEval(message.content)
        break
      case 'respawnAll':
        console.log(`[ShardingManager] Respawning all shards requested by shard#${shard.id}`)

        manager.respawnAll({
          shardDelay: config.app.fork.spawningDelay,
          respawnDelay: config.app.fork.killingDelay,
          waitForReady: config.app.fork.waitSpawning,
          currentShardIndex: 0
        })
        break
      default:
        console.log(`[Shard#${shard.id}] A new unknown command > ${message.action}:${message.type}`)
    }

    return null
  }

  return console.log(`[Shard#${shard.id}] ${message}`)
})

manager.spawn(config.app.fork.quantity, config.app.fork.spawningDelay)
