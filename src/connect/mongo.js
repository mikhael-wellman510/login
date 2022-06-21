"use strict";
const config = require('../config');

//Import the mongoose module
const mongoose = require("mongoose");

//Set up mongoose connection
const mongoDb1 = mongoose.createConnection(config.db_mongo_name1);
const mongoDb2 = mongoose.createConnection(config.db_mongo_name2);

//Bind connection to error event (to get notification of connection errors)
mongoDb1.on('error', console.error.bind(console, 'Name1 MongoDB connection error:'));
mongoDb2.on('error', console.error.bind(console, 'Name2 MongoDB connection error:'));

module.exports = { mongoDb1, mongoDb2 };