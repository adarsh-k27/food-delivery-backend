const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    picture:{
        type:String,
        required:false
    },
    email_verified:{
        type:Boolean,
        default:false
    },
    admin:{
        type:Boolean,
        required:true,
        default:false
    }
    
},{timestamps:true})

module.exports=mongoose.model('user',UserSchema)