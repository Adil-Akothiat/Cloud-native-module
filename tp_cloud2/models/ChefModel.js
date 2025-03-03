const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: String,
    createAt: Date
})

module.exports = mongoose.model('chef', chefSchema);