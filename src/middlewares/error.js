'use strict';
const response = require('../utils/response');

module.exports = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message
  const url = req.originalUrl;
  const method = req.method;
  const stack = err.stack;
  console.error(new Date().toISOString(), `${statusCode} - ${message} - ${url} - ${method} - Stack: ${stack}`);
  
  res.status(statusCode).json(response({ error: 'Connection failed.' }));
}
