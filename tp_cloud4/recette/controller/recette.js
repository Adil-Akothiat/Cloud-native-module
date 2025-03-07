const RecetteModel = require('../model/RecetteModel');
const { errorHandler } = require('../errorHandler/error');

const getAllRecettes = (req, res)=> errorHandler(async ()=> {
    const recettes = await RecetteModel.find({});
    return res.status(200).json({ data: { recettes } });
})(req,res);

const createRecette = (req, res)=> errorHandler(async ()=> {
    const { libelle } = req.body;
    const newRecette = new RecetteModel({ libelle });
    await newRecette.save();
    return res.status(200).json({ created:true, recette:newRecette });
})(req,res);

const updateRecette = (req, res)=> errorHandler(async ()=> {
    const nom = req.params.name;
    const { libelle } = req.body;
    const recette = await RecetteModel.findOneAndUpdate({ libelle:nom }, { libelle }, { new: true });
    return res.status(200).json({ updated:true, recette });
})(req,res);

const deleteRecette = (req, res)=> errorHandler(async ()=> {
    const nom = req.params.name;
    const recette = await RecetteModel.findOneAndDelete({ libelle: nom })
    return res.status(200).json({ deleted:true, recette });
})(req,res);



module.exports = {
    getAllRecettes,
    createRecette,
    updateRecette,
    deleteRecette
}