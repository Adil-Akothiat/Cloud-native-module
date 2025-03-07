const express = require('express');
const Router = express.Router();
const { authMiddleware } = require('../middlewares/authenticate');
const { getAllChefs } = require('../controllers/chef');

const response = (req, res, message)=>  res.send(message);
// all
Router.get('/all', authMiddleware, getAllChefs);
// names
Router.get('/names', (req, res)=> response(req, res, 'Retourne les noms des chefs'));
// recettes
Router.get('/recettes', (req, res)=> response(req, res, "Retourne le nombre de recettes par chef (retourne le nom du chef et le nombre de recettes)"));
// add
Router.post('/add', (req, res)=> response(req, res, "Ajout d'un chef (passe dans le corps de la requête)"));
// update chef information
Router.put('/update/:name', (req, res)=> response(req, res, "Modifie les informations d'un chef en se basant sur son nom."));
// delete chef
Router.delete('/delete/:name', (req, res)=> response(req, res, 'Supprime un chef'));

module.exports = { Router };