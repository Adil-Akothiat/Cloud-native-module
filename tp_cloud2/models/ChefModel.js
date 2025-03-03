const mongoose = require('mongoose');

const ChefSchema = new mongoose.Schema({
    name: String,
    createAt: Date
});

module.exports = mongoose.model('chef', ChefSchema);