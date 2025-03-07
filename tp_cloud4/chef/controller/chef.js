const ChefModel = require('../model/ChefModel');
const { errorHandler } = require('../errorHandler/error');

const getAllChefs = (req, res)=> errorHandler(async ()=> {
    const chefs = await ChefModel.find({});
    console.log(chefs);
    return res.status(200).json({ data: { chefs } });
})(req,res);

const createChef = (req, res)=> errorHandler(async ()=> {
    const { nom, specialite } = req.body;
    const newChef = new ChefModel({ nom, specialite });
    await newChef.save();
    return res.status(200).json({ created:true, chef:newChef });
})(req,res);

const updateChef = (req, res)=> errorHandler(async ()=> {
    const nom = req.params.name;
    const { specialite } = req.body;
    const chef = await ChefModel.findOneAndUpdate({ nom }, { specialite }, { new: true });
    return res.status(200).json({ updated:true, chef });
})(req,res);

const deleteChef = (req, res)=> errorHandler(async ()=> {
    const nom = req.params.name;
    const chef = await ChefModel.findOneAndDelete({ nom })
    return res.status(200).json({ deleted:true, chef });
})(req,res);



module.exports = {
    getAllChefs,
    createChef,
    updateChef,
    deleteChef
}