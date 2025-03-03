const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema({
    name: String,
    createAt: Date
});

module.exports = mongoose.model('recette', RecetteSchema);