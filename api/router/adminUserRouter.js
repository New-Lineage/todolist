const express =require ('express')
const router=express.Router()
const UserModel=require('../model/userModel')
//引用用户的数据类型 注册
router.get('/reg',(req,res)=>{
    let {us,ps}=req.query
    UserModel.insertMany({us,ps})
    .then((data)=>{
        console.log(data,'ok')
    })
    .catch((err)=>{
        console.log(err,'no ok')
    })
})


// 登陆
router.get('/login',(req,res)=>{
    let {us,ps}=req.query
    UserModel.findOne({us,ps})
    .then((data)=>{
        if(data){
            res.send({err:0,msg:'login ok'})
        }else{
            res.send({err:-2,msg:'login nook'})
        }
        console.log('login',data)
    })
    .catch((err)=>{
        res.send({err:-1,msg:'内部错误'})
    })

})
module.exports=router