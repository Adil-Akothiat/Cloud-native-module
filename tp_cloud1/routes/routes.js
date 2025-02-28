const express = require("express");
const Route = express.Router();
const { bonjour } = require('../controllers');
const { about } = require('../controllers/about');
const { contact } = require('../controllers/contact');
const { user } = require('../controllers/user');
const { login } = require('../controllers/login');
const { getTechnologies, getTechnologie, createTechnologie, updateTechnogie, deleteTechnologie } = require('../controllers/technologies');


Route.get('/', bonjour);
Route.get('/about', about);
Route.get('/contact', contact);
Route.get('/user/:id', user);
// auth
Route.post('/login', login);
// technologies
// get all
Route.get('/technologies', getTechnologies);
// get one
Route.get('/technologies/:id', getTechnologie);
// create one
Route.post('/technologies', createTechnologie);
// update one
Route.put('/technologies/:id', updateTechnogie);
// delete one
Route.delete('/technologies/:id', deleteTechnologie);

module.exports = Route;