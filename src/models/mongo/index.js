'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose");

const basename = path.basename(__filename);
const { db1, db2 } = require(__dirname + '/../../connect/mongo');
const db = {};

fs
  .readdirSync(__dirname + '/rospool')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/db1', file))(db1, mongoose);
    db[model.modelName] = model;
  });

fs
  .readdirSync(__dirname + '/db2')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/db2', file))(db2, mongoose);
    db[model.modelName] = model;
  });

module.exports = db;