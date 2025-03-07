const isAuth = (req, res)=> {
    try {
        return res.status(201).json({ isAuth: true });
    } catch(err) {
        return res.status(401).json({ message:'unauthorized' });
    } 
}

module.exports = { isAuth };