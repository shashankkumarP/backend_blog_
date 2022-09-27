
const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title:{type:String,required:true },
    content:{type:String, required:true},
    author:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
    
},{
    versionKey:false
})

const blog = mongoose.model("blog",blogSchema)
module.exports=blog