const mongoose = require('mongoose')
const CartSchema = mongoose.Schema({
    user: {
       type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    cart:[{
        product:{
            type:mongoose.Schema.ObjectId,
            ref:'product'
        },
        quantity:{
            type:Number,
            default:1
        }
    }]
})

module.exports=mongoose.model('cart',CartSchema)