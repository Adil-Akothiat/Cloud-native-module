const express = require('express');
const Router = express.Router();
const { getAllChefs, createChef, updateChef, deleteChef } = require('../controller/chef');
const { authMiddleware } = require('../middlewares/authenticate');


Router.get('/all', authMiddleware, getAllChefs);
Router.post('/add', authMiddleware, createChef);
Router.put('/update/:name', authMiddleware, updateChef);
Router.delete('/delete/:name', authMiddleware, deleteChef);

module.exports = { Router };