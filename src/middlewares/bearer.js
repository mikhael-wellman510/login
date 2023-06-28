'use strict'

const config = require('../config')
const response = require('../utils/response')

module.exports = (req, res, next) => {
  const bearerHeader = req.headers['authorization']

  if (!bearerHeader) {
    return res.status(403).json(response({ error: 'Key must be filled!' }))
  }

  const bearerToken = bearerHeader.split(' ')[1]
  if (bearerToken !== config.bearer_token) {
    return res.status(403).json(response({ error: 'Access key denied.' }))
  }

  next()
}
