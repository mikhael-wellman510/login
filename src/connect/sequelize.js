'use strict'
const config = require('../config');

module.exports = {
  local: {
    username: 'root',
    password: '',
    database: config.db_name,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  development: {
    username: config.db_user,
    password: config.db_pass,
    database: config.db_name,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: config.db_user,
    password: config.db_pass,
    database: config.db_name,
    host: config.db_server,
    port: config.db_port,
    dialect: 'mysql'
  }
};