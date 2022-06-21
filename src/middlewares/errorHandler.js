'use strict';

const response = require('../utils/response');

module.exports = (err, req, res, next) => {
  console.error(new Date(), `${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - Stack: ${err.stack}`);
  res.status(err.statusCode || 500).json(response.render({ error: 'Connection failed.' }));
}