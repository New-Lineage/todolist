import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd';
const {SubMenu} = Menu
class CustomNav extends Component {
 render(){
  //  console.log(this)
   return (
    <div>
          <Menu mode="inline"
        style={{ width: 256 }}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>表单样式</span>
            </span>
          }
        >
          <Menu.Item key="1" onClick={()=>{
            this.props.history.push('/admin/form')
          }}>表单</Menu.Item>
          <Menu.Item key="2" onClick={()=>{
            this.props.history.push('/admin/pic')
          }}>图表</Menu.Item>
          <Menu.Item key="3" onClick={()=>{
            this.props.history.push('/admin/file')
          }}>文件上传</Menu.Item>
          <Menu.Item key="4" onClick={()=>{
            this.props.history.push('/admin/text')
          }}>富文本</Menu.Item>
        </SubMenu>

      </Menu>
         <Menu
        mode="inline"
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>用户信息</span>
            </span>
          }
        >
          <Menu.Item key="1" onClick={()=>{
            this.props.history.push('/admin/home')
          }}>个人</Menu.Item>
          <Menu.Item key="2" onClick={()=>{
            this.props.history.push('/admin/mange')
          }}>管理</Menu.Item>
          <Menu.Item key="3" onClick={()=>{
            this.props.history.push('/admin/setup')
          }}>设置</Menu.Item>
          <Menu.Item key="4" onClick={()=>{
            this.props.history.push('/admin/back')
          }}>退出</Menu.Item>
        </SubMenu>
        </Menu>       

    </div>
   )
 }
}

export default withRouter(CustomNav)