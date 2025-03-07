const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    nom: {
        type: String,
        required: [true, 'nom is required']
    },
    prenom: {
        type: String,
        required: [true, 'prenom is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
});

module.exports = mongoose.model('User', UserSchema);