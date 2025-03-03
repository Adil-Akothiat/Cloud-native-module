const UserModel = require('../models/UserModel');
const { errorHandler } = require('../errorHandler/error');
const bcrypt = require('bcrypt');


const register = (req, res)=> errorHandler(async ()=> {
    const { username, password } = req.body;
    if(!username || !password) {
        throw new Error('Must Provide username & password to register');
    }
    if(username?.length == 0 || password?.length == 0) {
        throw new Error('Username & Password are required');
    }
    // has password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new UserModel({ username, password:hash });
    await user.save();
    return res.status(200).json({ register: true });
})(req, res);

const login = (req, res)=> errorHandler(async ()=> {
    const { username, password } = req.body;
    if(!username || !password) {
        throw new Error('Username & Password are required');
    }
    const user = await UserModel.findOne({ username });
    if(!user) {
        throw new Error('Invalid username or password');
    }
    const isValidPassword = bcrypt.compare(password, user.password);
    if(!(await isValidPassword)) {
        throw new Error('Inavlid username or password');
    }
    return res.status(200).json({ authenticate:true, token: 'aaa.bbb.ccc' });
})(req, res);

module.exports = {
    register,
    login
}