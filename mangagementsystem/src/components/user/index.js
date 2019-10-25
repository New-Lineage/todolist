import React,{Component} from 'react'
import {Card,Table,Spin,Pagination,Button,Popconfirm} from 'antd'
import axios from 'axios'
import Updata from './updata'
class UserList extends  Component{
    constructor(){
        super()
        
        this.state={
            spinning:true,
            nowPage:1,
            list:[],
            updateState:false,
            updataData:null
        }
    }
    del=(_id)=>{
      console.log(456)
      console.log(_id)
      let url  = `/admin/food/delFoods?_id=${_id}`
      axios.get(url)
      .then((data)=>{
        this.refreshData()
      })
      console.log(456)
      
    }
   updateUser=(data)=>{
     console.log(data)
     this.setState({updateState:true,updataData:data})
   }
    
    componentDidMount(){
  
       this.refreshData()
  
    }
    

    refreshData=()=>{
      console.log('关闭模态框')
      this.setState({spinning:true,updateState:false}) 
        let url = `/admin/food/getFoods`
        axios.get(url)
        .then((data)=>{
          console.log(data)
          this.setState({spinning:false,list:data.data.list})   
        })
        .catch(()=>{
          this.setState({spinning:false})   
        })
        
    }
    render(){
      
        let {spinning,list,updateState,updataData} = this.state
        return(
            <div className="uerlist-box">
            {! updateState || <Updata data={updataData} refresh = {this.refreshData}></Updata>}
            {/*修改列表的模态框*/}
             
               <Card style={{overflow:'hidden',width:'900px',margin:'20px auto'}} >
                <Spin spinning={spinning}></Spin>
                   <Table 
                    scroll={{y:400,x:900}}
                    dataSource={ list } 
                    columns={[
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width:200,
      height:40,
      fixed:'left'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width:100,
      height:40,
    },
    
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        height:40,
        width:100
      },
      {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
        height:40,
        width:150
      },
     
      {
        title: '操作1',
        key: 'action1',
        width:100,
        render:(data)=>{
          return(
            <div>
            <Popconfirm title='你确定要删除吗？'
             onConfirm={(e)=>{
               console.log(this)
                this.del(data._id)
           
             }}
            >
              <Button size="small" type='danger' 
              >删除</Button>
          
            </Popconfirm>
            
            </div>
          )
        }
      },
      {
        title: '操作2',
        key: 'action2',
        width:100,
        render:(data)=>{
          return(
            <div>
            <Popconfirm title='你确定要修改吗？'
             onConfirm={(e)=>{
               console.log(this)
                this.updateUser(data)
           
             }}
            >
              <Button size="small" type='primary' 
              >修改</Button>
          
            </Popconfirm>
            
            </div>
          )
        }
      },
     
      
    
  ]}
                    pagination={false}>
                    </Table>
                    <Pagination simple defaultCurrent={1} total={30} pageSize={3}
                      onChange={
                        (page,pageSize)=>{
                          this.refreshData(page)
                        console.log(page,pageSize)
                      }
                     
                      }
                    />
                 
               </Card>
              
            </div>
        )
    }
}
export default UserList