const jwt = require('jsonwebtoken');

function auth(req,res,next)
{
    
    const login = req.header();

    if(!login) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(login,process.env.SECRET);
        req.user = verified;
        next();
    } catch(err){
        res.status(400).send('invalid Token');
    }
}

module.exports = auth;