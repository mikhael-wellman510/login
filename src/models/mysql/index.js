'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const { db1, db2 } = require(__dirname + '/../../connect/mysql');
const db = {};

fs
  .readdirSync(__dirname + '/db1')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/db1', file))(db1, Sequelize.DataTypes);
    db[model.name] = model;
  });

fs
  .readdirSync(__dirname + '/db2')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/db2', file))(db2, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.db1 = db1;
db.db2 = db2;
db.Sequelize = Sequelize;

module.exports = db;