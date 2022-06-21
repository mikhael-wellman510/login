'use strict';
require('dotenv').config()

const CONFIG            = {}
CONFIG.env              = process.env.ENV             || 'development'
CONFIG.port             = process.env.PORT            || '8080'

CONFIG.db_server        = process.env.DB_SERVER       || '127.0.0.1'
CONFIG.db_port          = process.env.DB_PORT         || '3306'
CONFIG.db_name          = process.env.DB_NAME         || 'ziggot1_db'
CONFIG.db_user          = process.env.DB_USER         || 'root'
CONFIG.db_pass          = process.env.DB_PASS         || ''

CONFIG.db_name2_server  = process.env.DB_NAME2_SERVER || '127.0.0.1'
CONFIG.db_name2_port    = process.env.DB_NAME2_PORT   || '3306'
CONFIG.db_name2_name    = process.env.DB_NAME2_NAME   || 'ziggot2_db'
CONFIG.db_name2_user    = process.env.DB_NAME2_USER   || 'root'
CONFIG.db_name2_pass    = process.env.DB_NAME2_PASS   || ''

CONFIG.rd_server        = process.env.RD_SERVER       || '127.0.0.1'
CONFIG.rd_port          = process.env.RD_PORT         || '6379'
CONFIG.rd_pass          = process.env.RD_PASS         || ''

module.exports = CONFIG