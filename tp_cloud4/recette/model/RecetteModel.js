const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema({
    libelle: {
        type: String,
        required: [true, 'libelle is required'],
        unique: [true, 'Le libelle déja existe']
    },
});

module.exports = mongoose.model('Recette', RecetteSchema);