const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    catogery:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:String,
        required:true,
    },
    calory:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('product',ProductSchema)