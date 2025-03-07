const express = require('express');
const Router = express.Router();
const { getAllRestaurants, getRestaurantChefs, createRestaurant, deleteRestaurant, updateRestaurant, getRestaurantRecettes } = require('../controller/restaurant');
const { authMiddleware } = require('../middlewares/authenticate');


Router.get('/all', authMiddleware, getAllRestaurants);
Router.get('/chefs/:restaurantName', authMiddleware, getRestaurantChefs);
Router.get('/recettes/:restaurantName', authMiddleware, getRestaurantRecettes);
Router.post('/add', authMiddleware, createRestaurant);
Router.put('/update/:name', authMiddleware, updateRestaurant);
Router.delete('/delete/:name', authMiddleware, deleteRestaurant);

module.exports = { Router };