'use strict'

const express = require('express')
const cookieParser = require('cookie-parser')
const response = require('../utils/response')

// MIDDLEWARES
const bearer = require('../middlewares/bearer')

// CONTROLLERS ROUTES
const AuthController = require('../controllers/auth')
const UsersController = require('../controllers/users')
const BiodataController = require('../controllers/biodata')
const RefreshTokenController = require('../controllers/refreshToken')

//ROUTINGS
module.exports = (app) => {
  const userRouter = express.Router()
  app.use(cookieParser())
  app.use('/user', userRouter)
  userRouter.post('/login', UsersController.login)

  userRouter.post('/register', UsersController.register)
  userRouter.get('/getUser', bearer, UsersController.getUsers)
  userRouter.get('/new-token', RefreshTokenController.refreshToken)
  userRouter.delete('/logout', UsersController.logout)

  // Biodata
  const biodataRouter = express.Router()
  app.use('/biodata', biodataRouter)
  biodataRouter.get('/get-user', BiodataController.getBiodata)

  // catch 404 and forward to error handler
  app.use(function (req, res) {
    res.status(404).json(response({ error: 'No such route exists' }))
  })
}
