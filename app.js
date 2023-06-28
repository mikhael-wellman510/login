'use strict'
const config = require('./src/config')

// EXPRESS
const express = require('express')
const app = express()

// LOGGER
const morgan = require('morgan')
app.use(morgan('dev'))

// I/O
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// HEADER HELMET
const helmet = require('helmet')
app.use(helmet())

// CORS
const cors = require('cors')
app.options('*', cors())
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
)

// CONTROLLERS ROUTES
app.routes = require('./src/routes/v1')(app)

// ERROR HANDLER
const errorHandler = require('./src/middlewares/error')
app.use(errorHandler)

// CRON
if (config.processName === 'api-v1-master' || config.env === 'development') {
  require('./src/services/cron')();
}

// SERVER
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})
