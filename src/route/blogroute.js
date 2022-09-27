const express = require("express");
const route = express.Router();
const Blog = require("../Schema/blogSchema");

route.get("/",async (req,res)=>{
    let users = await Blog.find().populate("author",{
        name:1
    })
    res.send(users)
});
route.get("/:id",async (req,res)=>{
    let users = await Blog.find({_id:req.params.id}).populate("author",{
        name:1,
        _id:0
    })
    res.send(users)
})
route.post("/",async (req,res)=>{
    try{
        let user = await Blog.create(req.body);
        // let user = new Blog(req.body);
        // await user.save();
        res.send(user);
    } catch(e){
        res.status(401).send(e.message)
    }
    

})
route.delete("/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        await Blog.findByIdAndDelete(req.params.id);
         res.status(201).send("Delete successfully")
    }catch(e){
        res.status(401).send(e.message)
    }
})


module.exports=route;