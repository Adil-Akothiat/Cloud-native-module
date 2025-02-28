const { errorHandler } = require('../errorHandler/error');

const bonjour = (req, res)=> errorHandler(()=> {
    return res.send('Bonjour!');
})(req, res);

module.exports = { bonjour };