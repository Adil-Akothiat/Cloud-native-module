const express = require('express');
const Router = express.Router();

const response = (req, res, message)=>  res.send(message);
// all
Router.get('/all', (req,res)=> response(req, res, 'Retourne la liste de tous les restaurants.'));
// restaurant's chefs
Router.get('/chefs/:restaurantname', (req,res)=> response(req, res, "Retourne toutes les informations sur les chefs d'un restaurant passe en paramètre."));
// restaurant's recette
Router.get('/recettes/:restaurantname', (req,res)=> response(req, res, "Retourne toutes les informations sur les chefs d'un restaurant passe en paramètre."));
// restaurant with a specific category
Router.get('/listCategorie/:category', (req,res)=> response(req, res, "Retourne la liste de tous les restaurants d'une catégorie passe en paramètre."));
// list
Router.get('/list', (req,res)=> response(req, res, "Action unspecified!"));
// open restaurant in range of years [2001-2010] 
Router.get('/:annee1/:annee2', (req,res)=> response(req, res, "Retourne les restaurants ouvert entre les deux paramètres annee1 et annee2!"));
// add
Router.post('/add', (req,res)=> response(req, res, "Ajout d'un restaurant (passe dans le corps de la requête)"));
// update restaurant information
Router.put('/update/:name', (req,res)=> response(req, res, "Modifie les informations d'un restaurant en se basant sur son nom."));
// delete chef
Router.delete('/delete/:name', (req,res)=> response(req, res, 'Supprime un restaurant'));

module.exports = { Router };