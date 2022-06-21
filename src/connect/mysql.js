'use strict';

const Sequelize = require('sequelize');
const config = require('../config');

const db1 = new Sequelize(config.db_name, config.db_user, config.db_pass, {
  host: config.db_server,
  port: config.db_port,
  dialect: 'mysql',
  logging: config.env === 'production' ? false : console.log
});

const db2 = new Sequelize(config.db_name2_name, config.db_name2_user, config.db_name2_pass, {
  host: config.db_name2_server,
  port: config.db_name2_port,
  dialect: 'mysql',
  logging: config.env === 'production' ? false : console.log
});

db1.dialect.supports.schemas = true;
db2.dialect.supports.schemas = true;

const openConnection = async () => {
  try {
    await db1.authenticate();
    await db2.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
openConnection();

module.exports = { db1, db2 }
