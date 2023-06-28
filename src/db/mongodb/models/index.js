'use strict'

const fs = require('fs')
const path = require('path')
const Mongoose = require('mongoose')

const basename = path.basename(__filename)
const config = require(__dirname + '/../../../config')
const mongoose = Mongoose.createConnection(config.db_mongo_url)
const db = {}

mongoose.on('connected', () => {
  console.log('MongoDB connection established successfully.')
})
mongoose.on('error', (err) => {
  console.error('MongoDB connection error:', err)
})

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose, Mongoose)
    db[model.modelName] = model
  })

module.exports = db

// API createConnection - https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.createConnection()
