const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
    const token = req.header('Autherization');

    if(!token) {
        return res.status(401).json({error:'No token,autherization denied'});
    }

    try {
        const decoded = jwt.verify(token,config.get("jwt"));
        //console.log(decoded);

        req.userId = decoded.id;
        //console.log(req.userId);

        next();
    } catch (err) {
        console.error(err.message);
        res.status(401).json({error:'Token is not Valid'});
    }
}