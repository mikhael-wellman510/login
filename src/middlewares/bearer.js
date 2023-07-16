'use strict'

const config = require('../config')
const response = require('../utils/response')
const jwt = require('jsonwebtoken')
const { Users } = require('../db/mysql/models')
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
module.exports = async (req, res, next) => {
  // nnti di tes di header dengan key authorization
  // const refreshToken = req.cookies.refreshToken
  // console.log('hasil refresh token', refreshToken)
  // if (!refreshToken)
  //   return res.status(400).json(response({ message: 'Silahkan Login' }))

  const bearerHeader = req.headers['authorization']
  const token = bearerHeader

  if (!token)
    return res.status(403).json(response({ message: 'Anda harus Login !' }))

  jwt.verify(token, config.access_token_secret, (err, decoded) => {
    if (err)
      return res.status(400).json(response({ message: 'verify token fail' }))

    req.email = decoded.email
    next()
  })
}
