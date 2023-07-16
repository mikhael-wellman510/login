'use strict'
require('dotenv').config()

const CONFIG = {}
CONFIG.env = process.env.NODE_ENV || 'development'
CONFIG.port = process.env.PORT || '8080'

CONFIG.db_server = process.env.DB_SERVER || '127.0.0.1'
CONFIG.db_port = process.env.DB_PORT || '3306'
CONFIG.db_name = process.env.DB_NAME || 'auth_db'
CONFIG.db_user = process.env.DB_USER || 'root'
CONFIG.db_pass = process.env.DB_PASS || 'password'

CONFIG.db_mongo_url =
  process.env.DB_MONGO_URL || 'mongodb://localhost:27017/ziggot_db'

CONFIG.rd_server = process.env.RD_SERVER || '127.0.0.1'
CONFIG.rd_port = process.env.RD_PORT || '6379'
CONFIG.rd_pass = process.env.RD_PASS || ''

CONFIG.bearer_token = process.env.BEARER_TOKEN || 'bearer2022'

CONFIG.processName = process.env.PROCESS_NAME

// Access Token dan RefreshToken
CONFIG.access_token_secret =
  process.env.ACCESS_TOKEN_SECRET || 'mikhael201020192010'
CONFIG.refresh_token_secret =
  process.env.REFRESH_TOKEN_SECRET || 'refresh3393218482'

module.exports = CONFIG
