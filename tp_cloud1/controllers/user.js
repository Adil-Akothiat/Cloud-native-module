const { errorHandler } = require("../errorHandler/error");

const user = (req, res)=> errorHandler(()=> {
    const IDS = ['1', '2', '3'];
    if(!req.params?.id || !IDS.includes(req.params?.id)) {
        throw new Error('USER NOT FOUND!');
    }
    return res.status(200).send("USER - "+ req.params.id);
})(req, res);

module.exports = { user }