'use strict';

const response = require('../utils/response');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  login: catchAsync((req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json(response({ error: 'Email and password are required' }));
    }

    res.status(200).json(response({ message: 'Login success' }));
  }),
}
