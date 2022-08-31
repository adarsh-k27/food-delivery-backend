const ProductModal = require('../models/productModel')
const CatogeryModal = require('../models/catogery')

exports.AddCatogery = async (req, res) => {
    try {
        const {
            name
        } = req.body
        const create = await CatogeryModal.create({
            name
        })
        if (create) {
            return res.status(200).json({
                message: "success"
            })
        } else return res.status(400).json({
            message: "error"
        })
    } catch (error) {
        console.log(error);
    }
}

exports.GetAllCatogey = async (req, res) => {
    try {
        const AllCatogery = await CatogeryModal.find({})
        if (AllCatogery) {
            return res.status(200).json({
                message: "success",
                catogery: AllCatogery
            })
        }
    } catch (error) {
        console.log(error);
    }
}

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
        if (create) {
            return res.status(200).json({
                message: "Success",
                create
            })
        } else return res.status(400).json({
            message: "error"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something Went Wrong"
        })
    }
}

exports.GetAllProducts = async (req, res) => {
    try {
        let AllProducts = await ProductModal.find({})
        if (AllProducts) {
            AllProducts=await CatogeryModal.populate(AllProducts,{
                path:"catogery"
            })
            return res.status(200).json({
                message: "succes",
                products: AllProducts
            })
        }
        else return res.status(400).json({message:"error"})
        
    } catch (error) {
        console.log(error);
    }
}