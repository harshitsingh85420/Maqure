const JWT = require('jsonwebtoken');
const verifyToken = (req, res, next)=>{
    const authHeader = req.headers .token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        JWT.verify(token, process.env.JWT_KEY, (err, user)=>{
            if(err) res.status(403).json("Invalid Token");
            req.user = user;
            next();
        });
    } else{
        return res.status(401).json("You are not Authenticated")
    }
};

const verifyTokennAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
         else{
             res.status(403).json("Access Denied")
         }   
    });

};
const verifyTokennAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }
         else{
             res.status(403).json("You are not Admin")
         }   
    });

};
module.exports = {
    verifyToken,
    verifyTokennAuthorization, 
    verifyTokennAdmin
};