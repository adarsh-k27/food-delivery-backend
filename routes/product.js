const express=require('express')
const router=express.Router()
const {AddCatogery, GetAllCatogey, AddProduct, GetAllProducts}=require('../collections/product')


router.post('/add-product',AddProduct)
router.get('/',GetAllProducts)
router.post('/add-catogery',AddCatogery)
router.get('/catogery',GetAllCatogey)

module.exports=router
