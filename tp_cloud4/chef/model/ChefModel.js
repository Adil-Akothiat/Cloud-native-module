const mongoose = require('mongoose');

const ChefSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'nom is required'],
        unique: [true, 'Le chef déja existe']
    },
    specialite: {
        type: String,
        required: [true, 'specialite is required']
    }
});

module.exports = mongoose.model('Chef', ChefSchema);