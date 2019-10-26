// 和用户相关的对象和数据类型
const mongoose =require ('mongoose')
const foodSchema=mongoose.Schema({
    name:{type:String,required:true},  //必须项
    age:{type:Number}, //默认为18
    sex:{type:String},
    phone:{type:Number},
    imgs:{type:String}
})
const model = mongoose.model('person',foodSchema)
// 转换为schema对象

// 抛出
module.exports=model
