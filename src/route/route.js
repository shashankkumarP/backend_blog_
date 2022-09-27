const express = require("express");
const route = express.Router();
const User = require("../Schema/UserSchema");

route.get("/",async (req,res)=>{
    let users = await User.find()
    res.send(users)
});
route.get("/:id",async (req,res)=>{
    let users = await User.findOne({_id:req.params.id})
    res.send(users)
})
route.post("/",async (req,res)=>{
    try{
        // let user = await User.create(req.body);
        let user = new User(req.body);
        await user.save();
        res.send(user);
    } catch(e){
        res.status(401).send(e.message)
    }
    

})
route.delete("/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        await User.findByIdAndDelete(req.params.id);
         res.status(201).send("Delete successfully")
    }catch(e){
        res.status(401).send(e.message)
    }
})


module.exports=route;