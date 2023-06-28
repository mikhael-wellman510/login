'use strict'
const config = require('../../config')

// Connect to redis at 127.0.0.1 port 6379 no password.
const Redis = require('ioredis')

const options = {
  host: config.rd_server, // Redis host
  port: config.rd_port, // Redis port
  password: config.rd_pass, // Redis password
}

const redisClient = new Redis(options)
const redisPub = new Redis(options)
const redisSub = new Redis(options)

module.exports = {
  redisClient,
  redisPub,
  redisSub,
}
