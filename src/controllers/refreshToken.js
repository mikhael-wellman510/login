'use strict'

const config = require('../config')
const catchAsync = require('../utils/catchAsync')
const response = require('../utils/response')
const jwt = require('jsonwebtoken')
const { Users } = require('../db/mysql/models')

module.exports = {
  refreshToken: catchAsync(async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken

      console.log('ini new refresh token', refreshToken)
      if (!refreshToken)
        return res.status(404).json(response({ message: 'fails' }))
      const user = await Users.findOne({
        where: {
          refresh_token: refreshToken,
        },
      })

      if (!user)
        return res
          .status(400)
          .json(response({ message: 'gagal/refresh token tidak sama' }))
      jwt.verify(refreshToken, config.refresh_token_secret, (err, decode) => {
        if (err) return res.status(400).json(response({ message: err.message }))
        const userId = user.id
        const email = user.email

        // buat acces token baru
        const accessToken = jwt.sign(
          { userId, email },
          config.access_token_secret,
          {
            expiresIn: '15s',
          }
        )
        res
          .status(200)
          .json(response({ message: 'New Access Token', data: accessToken }))
      })
    } catch (error) {
      res.status(400).json(response({ message: error.message }))
    }
  }),
}
