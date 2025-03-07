const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'nom is required'],
        unique: [true, 'Le nom déja existe']
    },
    chefId: {
        type: String,
        required: [true, 'chef id is required']
    },
    recetteId: {
        type: String,
        required: [true, 'recette id is required']
    },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);