'use strict';

const express = require('express');
const response = require('../utils/response');

// MIDDLEWARES
const bearer = require('../middlewares/bearer');

// CONTROLLERS ROUTES
const AuthController = require('../controllers/auth');

//ROUTINGS
module.exports = (app) => {
  app.use(bearer);

  //Auth
  const authRouter = express.Router();
  app.use('/auth', authRouter);
  authRouter.post('/login', AuthController.login);

  // catch 404 and forward to error handler
  app.use(function (req, res) {
    res.status(404).json(response.render({ error: "No such route exists" }));
  });
}