'use strict'

const config = require('../config')
const catchAsync = require('../utils/catchAsync')
const response = require('../utils/response')
const { Biodata } = require('../db/mysql/models')

module.exports = {
  getBiodata: catchAsync(async (req, res) => {
    try {
      const biodata = await Biodata.findAll()
      console.log(biodata)

      res.status(200).json(response({ message: 'Suksess', data: biodata }))
    } catch (error) {}
  }),
}
