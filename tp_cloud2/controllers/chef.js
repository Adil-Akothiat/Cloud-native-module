const CheckModel = require('../models/ChefModel');
const { errorHandler } = require('../errorHandler/error');

const getAllChefs = (req, res)=> errorHandler(async ()=> {
    res.status(200).json({ message: 'Retourne la liste de tous les chefs.' });
})(req, res);

module.exports = {
    getAllChefs
}