const express =require ('express')
const router=express.Router()
const FoodModel =require ('../model/FoodModel ')
// 获取全部商品
router.get('/getFoods',(req,res)=>{
    FoodModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取信息ok',list:data})
    })
})
// 分页+分类
router.get('/getFoodsByPage',(req,res)=>{
    let page =req.query.page||1
    let pageSize=req.query.pageSize||3
    let count=0
    // 
    let sex=req.query.sex
    let obj={}  //{foodType:'热菜'}
    if(sex){obj.sex=sex}
    FoodModel.find(obj)  //获取总数据条
    .then((data)=>{
        count=data.length
        return FoodModel.find(obj).skip(Number((page-1)*pageSize)).limit(Number(pageSize))
        // res.send({err:0,msg:'获取信息ok',list:data})
        
    })
    .then((data)=>{
        res.send({err:0,msg:'获取信息ok',list:data,count:count})
    })
})
 
// 添加商品
router.get('/addFoods',(req,res)=>{
    let {name,sex,age,ipone,imgs}=req.query
    FoodModel.insertMany({name,sex,age,ipone,imgs})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'添加ok'})
    })
})

// 删除商品
router.get('/delFoods',(req,res)=>{
    let {_id}=req.query
    FoodModel.deleteOne({_id})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'删除ok'})
    })
})

// 修改
router.get('/updataFoods',(req,res)=>{
    let {_id,name,sex,age,ipone,imgs}=req.query
    FoodModel.updateOne({_id:_id},{name,sex,age,ipone,imgs})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'updataok'})
    })
})
module.exports=router