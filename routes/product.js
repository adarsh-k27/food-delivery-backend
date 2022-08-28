const express=require('express')
const router=express.Router()
const {AddCatogery, GetAllCatogey, AddProduct}=require('../collections/product')


router.post('/add-product',AddProduct)
//router.get('/',GetAllProduct)
router.post('/add-catogery',AddCatogery)
router.get('/catogery',GetAllCatogey)

module.exports=router
