import React,{Component} from 'react'
import {Card} from 'antd'
import axios from 'axios'
import '../../style/index.less'

class Updata extends  Component{
    constructor(props){
        super(props)
      
        this.state={
            _id:props.data._id||'',
            name:props.data.name||'',
            age:props.data.age||'',
            sex:props.data.sex||'',
            phone:props.data.phone||'',

        }
    }
    submit=()=>{
        console.log(this.state)
        let url = `/admin/food/updataFoods?_id=${this.state._id}&name=${this.state.name}&age=${this.state.age}&sex=${this.state.sex}&phone=${this.state.phone}`
        axios.get(url)
        .then((data)=>{
          console.log(data)
          this.props.refresh()
        })
       
    }

    render(){
        console.log(this,'信息修改组件')
        return(

            <div className="updata-box">
               <Card style={{width:'400px',height:'500px'}}>
               <label>name:</label>
               <input type='text' value={this.state.name}
                onChange={(e)=>{
                  this.setState({name:e.target.value})
               }} ></input><br></br>

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
               
               <button onClick={this.submit}>修改偶像信息</button>
               </Card>
               
            </div>
        )
    }
}


export default Updata