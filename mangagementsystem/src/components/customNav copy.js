import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd';
import '../style/customnav.less';
const { Header, Sider, Content } = Layout;
const {SubMenu} = Menu
class CustomNav extends Component {
 render(){
  //  console.log(this)
   return (
    <div>
        <Menu mode="inline"
      style={{ width: 256 }}>
        <Menu.Item key="1" onClick={()=>{
            this.props.history.push('/admin/first')
          }}><Icon type="tablet" />首页</Menu.Item>
        <Menu.Item key="2" onClick={()=>{
            this.props.history.push('/admin/form')
          }}><Icon type="switcher" />表单</Menu.Item>
          <Menu.Item key="3" onClick={()=>{
            this.props.history.push('/admin/pic')
          }}><Icon type="line-chart" />图表</Menu.Item>
          <Menu.Item key="4" onClick={()=>{
            this.props.history.push('/admin/file')
          }}><Icon type="folder" />文件上传</Menu.Item>
          <Menu.Item key="5" onClick={()=>{
            this.props.history.push('/admin/text')
          }}><Icon type="copy" />富文本</Menu.Item>
          
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="usb" />
              <span>用户信息</span>
            </span>
          }
        >
          <Menu.Item key="6" onClick={()=>{
            this.props.history.push('/admin/home')
          }}><Icon type="user-add" />个人</Menu.Item>
          <Menu.Item key="7" onClick={()=>{
            this.props.history.push('/admin/mange')
          }}><Icon type="tool" />管理</Menu.Item>
          <Menu.Item key="8" onClick={()=>{
            this.props.history.push('/admin/setup')
          }}><Icon type="setting" />设置</Menu.Item>
          <Menu.Item key="9" onClick={()=>{
            this.props.history.push('/admin/back')
          }}><Icon type="logout" />退出</Menu.Item>
        </SubMenu>
        
        </Menu>       
    </div>
   )
 }
}

export default withRouter(CustomNav)