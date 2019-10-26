const express =require('express')
const app=express()
const fs=require('fs')
const path=require('path')
const db =require('./connect')
// post 解析
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))

app.use(express.static(path.join(__dirname,'./www')))

// 路由
const UserRouter =require('./router/adminUserRouter')
const FoodRouter=require('./router/adminFoodRouter')
const FileRouter=require('./router/adminFileRouter')

app.use('/admin/user',UserRouter)
app.use('/admin/food',FoodRouter)
app.use('/admin/file',FileRouter)

app.listen(3000,()=>{
    console.log('server start')
})