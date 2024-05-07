const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')
const userController=require('../controller/userController')

router.get('/fetchmovies',auth.verifyToken,userController.fetchmovies)
// router.get('/fetchmovies',userController.fetchmovies)

module.exports=router