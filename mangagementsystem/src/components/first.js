import React, { Component } from 'react'
import { Menu, Icon, Layout, Avatar, Badge, Dropdown, message,Timeline,Comment,Form,Button,List,Input} from 'antd';
import { withRouter } from 'react-router-dom'
import EchartsProjects from './echars/EchartsProjects.js';
import '../style/first.less';
import CommentCom from '../comment/index'
import Commentpve from '../comment/commentpve'
import { relative } from 'path';



const { Header, Sider, Content } = Layout;
class First extends Component {
  constructor() {
    super()
    console.log(this)
  }
  state = {
    collapsed: false,
  };
  onClick = ({ key }) => {
    console.log(key)
    if (key == 1) {
     this.props.history.push('/admin/home')

    } else if (key == 2) {
      message.info(`您有很多消息，请去facebok上查看 ^_^`)
    } else if (key == 3) {

      this.props.history.push('/login')
    }
  };
  menu = () => (
    <Menu onClick={this.onClick}>
      <Menu.Item key="1">个人信息</Menu.Item>
      <Menu.Item key="2">消息</Menu.Item>
      <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
  );

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handlefrech(){
    // this.props.history.push('/admin/first')
    // this.forceUpdate()
    window.location.reload()
  }
  render() {
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ float: 'left', margin: '0  0  0 10px' }}>首页</div>
          <Badge count={1} style={{ backgroundColor: '#87d068', margin: '15px 15px 0  0' }}>
            <Dropdown overlay={this.menu}>
              <a className="ant-dropdown-link" href="#">
                <Avatar style={{ backgroundColor: '#87d068', float: 'right', margin: '15px 15px 0  0' }} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571737834262&di=218e2acf3a5cf3481b3de38a90b3cf7f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170728%2F5843abd8cdb74745a2fe2349879cb055.jpeg' />
              </a>
            </Dropdown>
          </Badge>
        </Header>
        <Content
          style={{
            height: '100%',
            margin: '24px 16px',
            padding: 0,
            background: '#f0f2f5',
            minHeight: 280,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ width: '20%' }}>
              <div style={{ width: '95%', height: '50%', paddingLeft: '15px', margin: ' 0 10px 15px 0', display: 'flex', alignItems: 'center', background: '#fff' }} className='heart'>
                <Icon type="heart" />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
                  <span>收藏</span>
                  <span>301</span>
                </div>
              </div>
              <div style={{ width: '95%', height: '50%', paddingLeft: '15px', margin: ' 0 10px 15px 0', display: 'flex', alignItems: 'center', background: '#fff' }} className="cloud">
                <Icon type="cloud" />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
                  <span>云数据</span>
                  <span>30111</span>
                </div>
              </div>
            </div>
            <div style={{ width: '20%' }}>
              <div style={{ width: '95%', height: '50%', paddingLeft: '15px', margin: ' 0 10px 15px 0', display: 'flex', alignItems: 'center', background: '#fff' }} className='picture'>
                <Icon type="picture" />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
                  <span>照片</span>
                  <span>802</span>
                </div>
              </div>
              <div style={{ width: '95%', height: '50%', paddingLeft: '15px', margin: ' 0 10px 15px 0', display: 'flex', alignItems: 'center', background: '#fff' }} className='mail'>
                <Icon type="mail" />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
                  <span>邮件</span>
                  <span>102</span>
                </div>
              </div>
            </div>
            <EchartsProjects style={{ width: '60%' }} ></EchartsProjects>
          </div>
          <div className='box' style={{display:'flex'}}>
              <div style={{width:'28%', marginTop:'26px',backgroundColor:'#fff',padding:'20px 0  0 15px'}}>
                  <Timeline>
                    <div style={{fontSize:'16px',marginBottom:'20px'}}>任务:</div><Icon onClick={this.handlefrech.bind(this)} type="redo" style={{position:"absolute",top:'48%',left:'38%'}} />
                    <Timeline.Item color="green">
                      <p>完善网站界面的优化----2019-10-24</p> 
                      <p>修改cs样式,减少数据的请求次数</p>
                      </Timeline.Item>
                    <Timeline.Item color="red">
                      <p>添加增删改查功能----2019-10-23</p>
                      <p>建立数据库，模拟假接口</p>
                    </Timeline.Item>
                    <Timeline.Item>
                      <p>设计整体框架布局----2019-10-22</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                      <p>登录功能设计----2019-10-22</p>
                    </Timeline.Item>
                  </Timeline>
              </div>
              <div style={{width:'60%',margin:'20px'}}>
                  <Commentpve></Commentpve>
                  <CommentCom ></CommentCom>
              </div>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default withRouter(First)







