const CartModel = require('../models/cart')
const ProductModel = require('../models/productModel')
exports.CreateCart = async (req, res) => {
    try {
        const {
            user,
            product,
        } = req.body
        //console.log(req.body);
        let cart = [{
            product
        }]
        const cartAlreadyCreated = await CartModel.findOne({
            user
        })
        if (cartAlreadyCreated) {
            //update cart
            //Alredy carted Product
            const AlreadyAdded = await cartAlreadyCreated.cart.find((item) => item.product == product)
            if (AlreadyAdded) {
                console.log("already added");
                //increase qty
                let increase = await CartModel.findOneAndUpdate({
                    user,
                    'cart.product': product
                }, {
                    $set: {
                        'cart.$.quantity': AlreadyAdded.quantity + 1
                    }
                }, {
                    new: true
                })
                if (increase) {
                    increase = await ProductModel.populate(increase, {
                        path: "cart.product"
                    })
                    return res.status(200).json({
                        cart: increase
                    })
                }

            } else {
                //push
                let updated = await CartModel.findOneAndUpdate({
                    user
                }, {
                    $push: {
                        cart
                    }
                }, {
                    new: true
                })
                if (updated) {
                    updated = await ProductModel.populate(updated, {
                        path: "cart.product"
                    })
                    return res.status(200).json({
                        cart: updated
                    })
                }
            }
        } else {
            // craete cart
            console.log("Not Already Created");
            let create = await CartModel.create({
                user,
                cart
            })
            if (create) {
                create = await ProductModel.populate(create, {
                    path: "cart.product"
                })
                return res.status(200).json({
                    cart: create
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

exports.FindCart = async (req, res) => {
    try {
        const {
            user
        } = req.params
        console.log(user);

        let cart = await CartModel.findOne({
            user: user.toString()
        })
        console.log(cart);
        cart = await ProductModel.populate(cart, {
            path: "cart.product"
        })
        if (cart) {
            return res.status(200).json({
                cart
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.ChangeQty = async (req, res) => {
    try {
        const {
            qtychange,
            product,
            user,qty
        } = req.body

        const update = await CartModel.findOneAndUpdate({
            user,
            "cart.product": product
        }, {
            $set:{
                "cart.$.quantity":qty+qtychange
            }
        },{new:true})

        if(update){
            return res.status(200).json({message:"SuccesFully iNcreased"})
        }
    } catch (error) {
        console.log(error);
    }
}

exports.ClearCart=async(req,res)=>{
    try{
    const {user}=req.body
    const deleteCart=await CartModel.deleteOne({user})
    if(deleteCart){
        return res.status(200).json({message:"deleted cart"})
    }
    }
    catch(error){
        console.log(error);
    }
}