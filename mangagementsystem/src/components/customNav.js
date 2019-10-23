import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon,Layout} from 'antd';
import '../style/customnav.less';
import { Avatar } from 'antd';
const {SubMenu} = Menu
const { Header, Sider, Content } = Layout;
class CustomNav extends Component {
  // state = {
  //   collapsed: false,
  // };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };
 render(){
  //  console.log(this)
   return (
    <div style={{position:'fixed'}}>
        <Menu mode="inline"
      style={{ width: 256,height:'100vh' }} theme="dark">
        <Menu.Item key="1" onClick={()=>{
            this.props.history.push('/admin/first')
          }}><Icon type="tablet" />首页</Menu.Item>

          <SubMenu
            key="sub2"
            title={
              <span>
                <span><Icon type="user" />用户管理</span>
              </span>
            }
          >
              <Menu.Item key="2" onClick={()=>{
                this.props.history.push('/admin/add')
              }}><Icon type="user-add" />添加用户</Menu.Item>
               <Menu.Item key="3" onClick={()=>{
                this.props.history.push('/admin/del')
              }}><Icon type="user-delete" />删除用户</Menu.Item>        
            </SubMenu>
            <SubMenu
            key="sub3"
            title={
              <span>
                <span><Icon type="file-image" />图表处理</span>
              </span>
            }
          >
              <Menu.Item key="4" onClick={()=>{
                this.props.history.push('/admin/form')
              }}><Icon type="switcher" />添加表单</Menu.Item>
              <Menu.Item key="5" onClick={()=>{
                this.props.history.push('/admin/pic')
              }}><Icon type="line-chart" />添加图表</Menu.Item>
              <Menu.Item key="6" onClick={()=>{
                this.props.history.push('/admin/file')
              }}><Icon type="folder" />文件上传</Menu.Item>           
            </SubMenu>




          <Menu.Item key="7" onClick={()=>{
            this.props.history.push('/admin/text')
          }}><Icon type="copy" />富文本</Menu.Item>
          <Menu.Item key="8" onClick={()=>{
            this.props.history.push('/admin/mange')
          }}><Icon type="tool" />管理</Menu.Item>
          <Menu.Item key="9" onClick={()=>{
            this.props.history.push('/admin/setup')
          }}><Icon type="setting" />设置</Menu.Item>


            <Menu.Item key="11" onClick={()=>{
            this.props.history.push('/admin/empty1')
          }}><Icon type="logout" />空白页</Menu.Item>
          <Menu.Item key="12" onClick={()=>{
            this.props.history.push('/admin/empty2')
          }}><Icon type="logout" />空白页</Menu.Item>
          <Menu.Item key="13" onClick={()=>{
            this.props.history.push('/admin/empty3')
          }}><Icon type="logout" />空白页</Menu.Item>

          <Menu.Item key="10" onClick={()=>{
            this.props.history.push('/admin/back')
          }}><Icon type="logout" />退出</Menu.Item>
   
        </Menu>       
    </div>
   )
 }
}

export default withRouter(CustomNav)

