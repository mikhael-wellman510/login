'use strict'

const response = require('../utils/response')
const catchAsync = require('../utils/catchAsync')
const { Users } = require('../db/mysql/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

const cookieParser = require('cookie-parser')

module.exports = {
  getUsers: catchAsync(async (req, res) => {
    try {
      const users = await Users.findAll()
      const tes = config.access_token_secret

      res
        .status(200)
        .json(response({ message: ' Succes get data ', data: users }))
    } catch (error) {
      res.status(400).json(response({ message: error.message }))
    }
  }),
  register: catchAsync(async (req, res) => {
    const { email, password, confirm_password } = req.body
    if (password !== confirm_password)
      return res
        .status(400)
        .json(response({ message: 'Password & Confirm Password tidak sama' }))

    // hash Password
    const salt = await bcrypt.genSalt()
    // salt & password d gabung
    const hashPassword = await bcrypt.hash(password, salt)
    // method Post
    try {
      const createAccount = await Users.create({
        email: email,
        password: hashPassword,
      })
      res
        .status(200)
        .json(response({ message: 'Register Berhasil', data: createAccount }))
    } catch (error) {
      res.status(400).json(response({ message: error.message }))
    }
  }),
  login: catchAsync(async (req, res) => {
    const password = req.body.password

    try {
      //login di postman
      const user = await Users.findOne({
        where: {
          email: req.body.email,
        },
      })
      //cocokan Password yang di hash
      if (!req.body.email || !password)
        return res
          .status(400)
          .json(response({ message: 'Harap Isi semua data' }))
      if (!user)
        return res
          .status(400)
          .json(response({ message: 'Email yang anda masukan salah' }))
      const match = await bcrypt.compare(password, user.password)

      if (!match)
        return res.status(400).json(response({ message: 'Wrong Password' }))

      //buat Payload
      const userId = user.id
      const email = user.email

      // ===== ooo ====
      //buat access token

      const accessToken = jwt.sign(
        { userId, email },
        config.access_token_secret,
        {
          expiresIn: '10s',
        }
      )
      //dikirim ke cookie
      const refreshToken = jwt.sign(
        { userId, email },
        config.refresh_token_secret,
        {
          expiresIn: '1d',
        }
      )

      // ==== ooo =======
      //Push refreshToken ke Database
      const pushRefreshToken = await Users.update(
        {
          refresh_token: refreshToken,
        },
        {
          where: {
            id: userId,
          },
        }
      )

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })

      res.status(200).json(response({ message: 'Succes', data: accessToken }))
    } catch (error) {
      res.status(400).json(response({ message: error.message }))
    }
  }),
  logout: catchAsync(async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken

      if (!refreshToken) return res.send('Token tidak ditemukan')
      const user = await Users.findOne({
        where: {
          refresh_token: refreshToken,
        },
      })

      const userId = user.id

      // membuat refresh token jadi null sehingga logout
      const deleteRefreshToken = await Users.update(
        {
          refresh_token: null,
        },
        {
          where: {
            id: userId,
          },
        }
      )

      res.clearCookie('refreshToken')
      return res.status(200).json(response({ message: 'Berhasil Logout' }))
    } catch (error) {
      res.status(400).json(response({ message: error.message }))
    }
  }),
}
