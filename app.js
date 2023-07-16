'use strict'
const config = require('./src/config')

// EXPRESS
const express = require('express')
const app = express()

//Cokies parser
const dotenv = require('dotenv')
dotenv.config()
// LOGGER
const morgan = require('morgan')
app.use(morgan('dev'))

// I/O
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const cookieParser = require('cookie-parser')

// HEADER HELMET
const helmet = require('helmet')
app.use(helmet())

app.use(cookieParser())

const cors = require('cors')

// CORS

app.options('http://localhost:3000', cors())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
)
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// CONTROLLERS ROUTES
app.routes = require('./src/routes/v1')(app)

// ERROR HANDLER
const errorHandler = require('./src/middlewares/error')
app.use(errorHandler)

// CRON
if (config.processName === 'api-v1-master' || config.env === 'development') {
  require('./src/services/cron')()
}

// SERVER
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`) // Port 8080
})
