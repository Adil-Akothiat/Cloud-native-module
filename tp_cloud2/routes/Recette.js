const express = require('express');
const Router = express.Router();

const response = (req, res, message)=>  res.send(message);
// all
Router.get('/all', (req,res)=> response(req, res, 'Retourne la liste de tous les recettes.'));
// names
Router.get('/names', (req,res)=> response(req, res, 'Retourne les noms des recettes'));
// add
Router.post('/add', (req,res)=> response(req, res, "Ajout d'une recette (passe dans le corps de la requête)"));
// update chef information
Router.put('/update/:name', (req,res)=> response(req, res, "Modifie les informations d'une recette en se basant sur son nom."));
// delete chef
Router.delete('/delete/:name', (req,res)=> response(req, res, 'Supprime une recette'));

module.exports = { Router };