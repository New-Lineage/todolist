// 和用户相关的对象和数据类型
const mongoose =require ('mongoose')
const userSchema=mongoose.Schema({
    us:{type:String,required:true},  //必须项
    age:{type:Number,default:0}, //默认为0
    ps:{type:String,default:123},
})
const model = mongoose.model('users',userSchema)
// 转换为schema对象

// 抛出
module.exports=model
