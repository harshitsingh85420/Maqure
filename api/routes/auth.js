const router = require('express').Router();
const CryptoJS = require('crypto-js')
const User = require("../models/User");
const JWT = require('jsonwebtoken');
//Resgister User
router.post("/register", async (req, res)=>{
    const newUser  = new User({
        username : req.body.username,
        email : req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.KEY).toString()
    });
    try{
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(200).json(savedUser);
    }

    catch(err){
        console.log(err);
        res.status(400);
    }
});

// LOGIN

router.post("/login", async(req, res)=>{

    try{
        const user =  await User.findOne({username: req.body.username});

        !user && res.status(400).json("Wrong Credentials");
       
        const hashedpass = CryptoJS.AES.decrypt(user.password, process.env.KEY);
        const pass = hashedpass.toString(CryptoJS.enc.Utf8);      
        pass !== req.body.password && res.send(400).json("Wrong Credentials");
        
        const Accesstoken = JWT.sign({
            id : user._id,
            isAdmin : user.isAdmin
        }, 
        process.env.JWT_KEY,
        {expiresIn : "3d"}
        )
        const {password , ...others} = user._doc;
        res.status(200).json({...others, Accesstoken});
    }catch(err){
        res.status(400).json(err);
    }
});
module.exports = router;