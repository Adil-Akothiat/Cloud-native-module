const mongoose = require('mongoose');

const CoursSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, 'titre is required']
    },
    professeur_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'professeur_id is required']
    },
    description: {
        type: String,
        default: ''
    },
    prix: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Cours', CoursSchema);