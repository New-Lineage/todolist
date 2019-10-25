import React,{Component} from 'react'
import {Card} from 'antd'
import axios from 'axios'
//import axios from 'axios'
// import '../../style/add.less'
class Add extends  Component{
    constructor(){
        super()
        this.state={
            name:'',
            age:'',
            sex:'',
            phone:'',

        }
    }
    submit=()=>{
        console.log(this.state)
        console.log(this.state.name)
        let name = this.state.name
        let age = this.state.age
        let sex = this.state.sex
        let phone = this.state.phone
        let url = `/admin/food/addFoods?name=${name}&age=${age}&sex=${sex}&phone=${phone}`
        axios.get(url)
        .then(()=>{
            alert('添加成功')
             
          })
          .catch(()=>{
            alert('添加失败')
          })
      
    }

    render(){
        //let {spinning,list} = this.state
        return(

            <div className="addlist-box">
               <Card >
               <div>
               <span>name:</span>
               <input type='text' value={this.state.name}
                onChange={(e)=>{
                  this.setState({name:e.target.value})
               }} ></input><br></br>

               </div>
               <label>age:</label>
               <input type='text' value={this.state.age}
                onChange={(e)=>{
                  this.setState({age:e.target.value})
               }} ></input><br></br>

               <label>sex:</label>
               <input type='text' value={this.state.sex}
                onChange={(e)=>{
                  this.setState({sex:e.target.value})
               }} ></input><br></br>

               <label>phone:</label>
               <input type='text' value={this.state.phone}
                onChange={(e)=>{
                  this.setState({phone:e.target.value})
               }} ></input><br></br>
               <button onClick={this.submit}>添加偶像信息</button>
               </Card>
               
            </div>
        )
    }
}

export default Add