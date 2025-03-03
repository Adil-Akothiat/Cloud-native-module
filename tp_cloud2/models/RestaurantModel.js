const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    createAt: Date
});

module.exports = mongoose.model('restaurant', RestaurantSchema);