const mongoDB = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const express = require("express");
const app = express();
app.use(express.json());

const handleroute = require("./src/route/route.js");
// const User = require("./Schema/UserSchema.js");
const handleblog = require("./src/route/blogroute.js");



// const userSchema = new mongoDB.Schema({
//     name:{type:String,required:true },
//     email:{type:String, required:true,default:"a@b.com"},
//     gender:{type:String,required:true,enum:["Male","Female"]},
//     age:{type:Number,min:20,max:100}
    
// },{
//     versionKey:false
// })

// const User = mongoDB.model("user",userSchema)
// app.use("/users",handleroute);

app.use("/users",handleroute)
app.use("/blogs",handleblog);
app.get("/",(req,res)=>{
    res.send("hello")
})
// app.get("/users",async (req,res)=>{
//     let users = await User.find()
//     res.send(users)
// });
// app.get("/users/:id",async (req,res)=>{
//     let users = await User.find({_id:req.params.id})
//     res.send(users)
// })
// app.post("/users",async (req,res)=>{
//     let user = await User.create(req.body);
//     res.send(user);

// })
// app.delete("/users/:id",async (req,res)=>{
//     try{
//         console.log(req.params.id)
//         User.findOneAndDelete({_id:req.params.id});
//          res.status(201).send("Delete successfully")
//     }catch{
//         res.status(401).send("id not found")
//     }
// })

app.listen(PORT,async ()=>{
    // await mongoDB.connect("mongodb://localhost:27017/nem101")
    await mongoDB.connect(MONGODB_URL)

    console.log("started");
})