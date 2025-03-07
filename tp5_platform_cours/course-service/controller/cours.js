const CoursModel = require('../model/CoursModel');
const { errorHandler } = require('../errorHandler/error');

const getCours = (req, res)=> errorHandler(async ()=> {
    const courses = CoursModel.find({});
    return res.status(200).json({ data: courses });
})(req, res);

module.exports = {
    getCours
}