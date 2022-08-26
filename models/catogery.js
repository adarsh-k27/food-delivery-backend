const mongoose=require('mongoose')
const CatogerySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=mongoose.model('catogery',CatogerySchema)