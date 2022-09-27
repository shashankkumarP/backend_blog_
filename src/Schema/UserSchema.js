
const mongoDB = require("mongoose");

const userSchema = new mongoDB.Schema({
    name:{type:String,required:true,unique:true },
    email:{type:String, required:true,default:"a@b.com",unique:true},
    gender:{type:String,required:true,enum:["Male","Female"]},
    age:{type:Number,min:20,max:100},
    blogs:[
        {
            type: mongoDB.Schema.Types.ObjectId,
            ref:"blog"
        }
    ]

    
},{
    versionKey:false
})

const User = mongoDB.model("user",userSchema)
module.exports=User