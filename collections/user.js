const UserModel=require('../models/user')
const JWT=require('jsonwebtoken')

exports.SignInGoogle=async(req,res)=>{
    try{
    const {
        name,
        email,
        email_verified,
        picture
    } = req.body
    let admin=false
    console.log(req.body);
    const isExist=await UserModel.findOne({email})
    if(isExist){
        //login
      const token=await JWT.sign({_id:isExist._id,email:isExist.email},process.env.SCECRET)
      if(token && isExist){
        return res.status(200).json({token,user:isExist})
      }
    }
    else{
        if(email=="adarshkdev27@gmail.com"){
             admin=true
        }
        const create=await UserModel.create({name,email,admin,email_verified,picture})
        if(create){
            const token = await JWT.sign({
                _id: create._id,
                email: create.email
            }, process.env.SCECRET)
            return res.status(200).json({user:create,token})
        }
        //signUp and login
    }    
    }
    catch(error){
        console.log(error);
    }
}