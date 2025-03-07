const UserModel = require('../models/UserModel');
const { errorHandler } = require('../errorHandler/error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = (req, res)=> errorHandler(async ()=> {
    const { email, nom, prenom, password } = req.body;
    // has password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new UserModel({ email, nom, prenom, password:hash });
    await user.save();
    return res.status(200).json({ register: true });
})(req, res);

const login = (req, res)=> errorHandler(async ()=> {
    const { email, password } = req.body;
    if(!email || !password) {
        throw new Error('Username & Password are required');
    }
    const user = await UserModel.findOne({ email });
    if(!user) {
        throw new Error('Invalid username or password');
    }
    const isValidPassword = bcrypt.compare(password, user.password);
    if(!(await isValidPassword)) {
        throw new Error('Inavlid username or password');
    }
    const token = jwt.sign({ nom: user.nom, prenom: user.prenom }, process.env.JWT_SECRET, { expiresIn: '1m' });
    return res.status(200).json({ authenticate:true, token: token });
})(req, res);

module.exports = {
    register,
    login
}