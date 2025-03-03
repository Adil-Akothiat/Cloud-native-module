const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
    name: String,
    createAt: Date
});

module.exports = mongoose.model('recette', recetteSchema);