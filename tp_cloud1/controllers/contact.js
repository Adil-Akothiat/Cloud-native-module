const { errorHandler } = require("../errorHandler/error");

const contact = (req, res)=> errorHandler(()=> {
    return res.send('Page de contact');
})(req, res);

module.exports = { contact };