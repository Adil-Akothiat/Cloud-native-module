const express = require('express');
const Router = express.Router();
const { getAllRecettes, createRecette, updateRecette, deleteRecette } = require('../controller/recette');
const { authMiddleware } = require('../middlewares/authenticate');


Router.get('/all', authMiddleware, getAllRecettes);
Router.post('/add', authMiddleware, createRecette);
Router.put('/update/:name', authMiddleware, updateRecette);
Router.delete('/delete/:name', authMiddleware, deleteRecette);

module.exports = { Router };