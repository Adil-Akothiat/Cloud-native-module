const express = require('express');
const Router = express.Router();
const { register, login } = require('../controller/user');
const { isAuth } = require('../controller/isAuth');
const { authMiddleware } = require('../middlewares/authenticate');

Router.post('/register', register);
Router.post('/login', login);
Router.get('/isAuth', authMiddleware, isAuth);

module.exports = { Router };