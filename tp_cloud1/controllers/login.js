const { errorHandler } = require("../errorHandler/error");

const USERS = [
    {
        admin:"adil",
        password:"1234"
    },
    {
        admin:"ali",
        password:"123"
    }
]
const login = (req, res)=> errorHandler(()=> {
    const user = req.body;
    if(!user) {
        throw new Error("Forbidden");
    }
    const search = USERS.filter(u=> u.admin == user.admin && u.password == user.password);
    if(search.length == 0) {
        throw new Error("Identifiants incorrects");
    }
    return res.status(200).send('Connexion réussie');
})(req, res);

module.exports = { login }