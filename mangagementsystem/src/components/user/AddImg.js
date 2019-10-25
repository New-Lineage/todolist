import React,{Component} from 'react'
import {Card} from 'antd'
import './index.less'

class UserAdd extends  Component{
    constructor(){
        super()
        this.state={
            img:''
        }
    }
    submit=()=>{
        let file = this.refs.file.files[0]
        var r = new FileReader();
        r.onload = ()=>{
            console.log(r.result)
            this.setState({img:r.result})
        }
        r.readAsDataURL(file)

      
    }

    render(){
        //let {spinning,list} = this.state
        return(
            <div className="uerlist-box">
               
               <Card >
                 <input type='file' ref='file'></input>
                 <button onClick={this.submit}>上传</button>
                 <img src={this.state.img}></img>
               </Card>
               
            </div>
        )
    }
}
/*
 图片上传的方式一般分为两种
    1、文件上传
       获取文件
       将文件添加到formdata对象
       通过接口实现上传
       返回数据信息

    2、base64上传
*/
export default UserAdd