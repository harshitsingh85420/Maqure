const router = require('express').Router();
const {verifyTokennAuthorization, verifyTokennAdmin} = require('../middleware/verifyToken');
const User = require("../models/User");

router.put("/:id", verifyTokennAuthorization, async (req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.KEY).toString();
    }
    
    try{
      
        console.log(req.body);
        await User.findByIdAndUpdate(
             req.params.id, 
            {
                $set:req.body,
            },
            {new : true}, (err, user)=>{
                if(err)res.status(402).json(err);
                else res.status(200).json(user);
            }
            
           
        ).then().catch(err=>console.log(err));
            
           
    }
    catch(err){
        res.status(402).json(err); 
    }
});
//Delete User
router.delete("/:id", verifyTokennAuthorization, async (req, res)=>{
    try{
        
        await User.findByIdAndDelete(req.params.id)
        .then(res.status(200).json("User Deleted Succesfully"))
        .catch(err=>res.status(400).json(err));
    }
    catch(err){
        res.status(400).json(err);
    }
})
// Get User
router.get("/find/:id", verifyTokennAdmin, async (req, res)=>{
    try{
        
        const user = await User.findById(req.params.id);
        const {password , ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(400).json(err);
    }
})
// Get All Users
router.get("/", verifyTokennAdmin, async (req, res)=>{
    const query = req.query.new;
    try{
        
        const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json(err);
    }
});

//GET USER STATS

router.get("/stats", verifyTokennAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router; 