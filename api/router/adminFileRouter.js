const express =require ('express')
const router=express.Router()
const fs=require('fs')
const path=require('path')
const multer=require('multer')
router.post('/img',multer().single('picture'),(req,res)=>{
    console.log(req.file)
    let {buffer,mimetype,originalname} =req.file
    // 类型判断 尺寸判断 
    let types=['gif','jpg','jpeg','png',]
    let fileType=mimetype.split('/')[1]
    if(types.indexOf(fileType)===-1){
        return res.send({err:-2,msg:'文件类型错误'})
    }
    // 获取图片的类型  path里面的方法extname（可以直接获取后缀名）
    let extname=path.extname(originalname)
    // 时间戳加随机数
    let filename=(new Date()).getTime()+parseInt(Math.random()+12355)
    fs.writeFile(path.join(__dirname,`../public/img/${filename}${extname}`),buffer,(err)=>{
        if(err){
            res.send({err:-1,msg:'文件上传错误'})
        }else{
            // http://localhost:3000/pulic/img/hehe.jpg
            res.send({err:0,msg:'上传ok',imgPath:`/public/img/${filename}${extname}`})
        }
    }) 
})


module.exports=router