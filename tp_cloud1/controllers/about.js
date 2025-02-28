const { errorHandler } = require("../errorHandler/error");

const about = (req, res)=> errorHandler(()=> {
    return res.send('A propos de nous')
})(req, res);

module.exports = { about }