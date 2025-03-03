const express = require('express');
const Router = express.Router();
const { register, login } = require('../controllers/user');


Router.post('/register', register);
Router.post('/login', login);

module.exports = { Router };