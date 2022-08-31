const express=require('express')
const { CreateCart, FindCart, ChangeQty, ClearCart } = require('../collections/cart')
const router=express.Router()

router.post('/add', CreateCart)
router.get('/:user',FindCart)
router.put('/change',ChangeQty)
router.delete('/delete',ClearCart)

module.exports=router