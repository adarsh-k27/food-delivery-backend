const express=require('express')
const router=express.Router()
const {SignInGoogle} =require('../collections/user')

 router.post('/signin',SignInGoogle)


 module.exports = router