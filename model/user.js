var mongoose=require("mongoose")

var UserSchema=new mongoose.Schema({
    email:String,
    password:String,
    token:String,
    company:{
        type:String,
        default:null
    },
    score:{
        type:Number,
        default:0
    }
})


module.exports=mongoose.model("UserEntry",UserSchema)