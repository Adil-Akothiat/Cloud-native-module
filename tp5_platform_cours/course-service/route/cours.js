const express = require('express');
const Router = express.Router();
const { register, login } = require('../controller/user');
const { authMiddleware } = require('../middlewares/authenticate');

Router.post('/register', register);

module.exports = { Router };