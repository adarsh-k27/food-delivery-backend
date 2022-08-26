const ProductModal = require('../models/productModel')
exports.AddProduct = async (req, res) => {
    try {
        const {
            name,
            catogery,
            calory,
            price,
            img
        } = req.body
        const create = await ProductModal.create({
            name,
            price,
            catogery,
            calory,
            img
        })
        if(create){
            return res.status(200).json({message:"Success",create})
        }
        else return res.status(400).json({message:"error"})
    } catch (error) {
       return res.status(500).json({message:"Something Went Wrong"})
    }
}