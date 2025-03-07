const RestaurantModel = require('../model/RestaurantModel');
const { errorHandler } = require('../errorHandler/error');
const axios = require('axios');

const getAllRestaurants = (req, res)=> errorHandler(async ()=> {
    const restaurants = await RestaurantModel.find({});
    return res.status(200).json({ data: { restaurants } });
})(req,res);

const getRestaurantChefs = (req, res)=> errorHandler(async ()=> {
    const { restaurantName } = req.params;
    const { token } = req.body;
    const restaurants = await RestaurantModel.find({ nom:restaurantName });
    const { data } = await axios.get('http://localhost:3002/api/v1/chefs/all', {
        headers: {
            'Authorization': 'Bearer '+token
        }
    });
    const filteredChefs = data.data.chefs.filter(({ _id })=> restaurants.map(r=> r.chefId).includes(_id));
    return res.status(200).json({ data: filteredChefs });
})(req,res);

const getRestaurantRecettes = (req, res)=> errorHandler(async ()=> {
    const { restaurantName } = req.params;
    const { token } = req.body;
    const restaurants = await RestaurantModel.find({ nom:restaurantName });
    const { data } = await axios.get('http://localhost:3003/api/v1/recettes/all', {
        headers: {
            'Authorization': 'Bearer '+token
        }
    });
    const filteredRecettes = data.data.recettes.filter(({ _id })=> restaurants.map(r=> r.recetteId).includes(_id));
    return res.status(200).json({ data: filteredRecettes });
})(req,res);

const createRestaurant = (req, res)=> errorHandler(async ()=> {
    const { nom, chefId, recetteId } = req.body;
    const newRestaurant = new RestaurantModel({ nom, chefId, recetteId });
    await newRestaurant.save();
    return res.status(200).json({ created:true, restaurant:newRestaurant });
})(req,res);

const updateRestaurant = (req, res)=> errorHandler(async ()=> {
    const { name } = req.params;
    const { nom, chefId, recetteId } = req.body;
    const restaurant = await RestaurantModel.updateMany({ nom:name }, { nom, chefId, recetteId }, { new: true });
    return res.status(200).json({ updated:true });
})(req,res);

const deleteRestaurant = (req, res)=> errorHandler(async ()=> {
    const nom = req.params.name;
    const restaurant = await RestaurantModel.deleteMany({ nom });
    return res.status(200).json({ deleted:true });
})(req,res);



module.exports = {
    getAllRestaurants,
    getRestaurantChefs,
    getRestaurantRecettes,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}