const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    createAt: Date
});

module.exports = mongoose.model('restaurant', restaurantSchema);