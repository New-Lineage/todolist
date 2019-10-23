import React, { Component } from 'react'
import { Layout, Badge, Dropdown, Avatar, Menu, message } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Home extends Component {
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
  render() {
    return (
      <Layout className='box2' style={{ width: '100%', height: '100%' }}>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div style={{ float: 'left', margin: '0  0  0 10px' }}>个人中心</div>
            <Badge count={1} style={{ backgroundColor: '#87d068', margin: '15px 15px 0  0' }}>
              <Dropdown overlay={this.menu}>
                <a className="ant-dropdown-link" href="#">
                  <Avatar style={{ backgroundColor: '#87d068', float: 'right', margin: '15px 15px 0  0' }} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571737834262&di=218e2acf3a5cf3481b3de38a90b3cf7f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170728%2F5843abd8cdb74745a2fe2349879cb055.jpeg' />
                </a>
              </Dropdown>
            </Badge>
          </Header>
          <Layout>
            <Sider width='25%' style={{ backgroundColor: 'red'}}>
              <div style={{height:'60px',fontSize:'20px',}}>About me</div>
              <hr></hr>
              <div>
                <div style={{width:'90px',height:'90px',borderRadius:'50%'}}><img style={{width:'90px',height:'90px',borderRadius:'50%'}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571737834262&di=218e2acf3a5cf3481b3de38a90b3cf7f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170728%2F5843abd8cdb74745a2fe2349879cb055.jpeg" alt=""/></div>
              </div>
              <div>3</div>
            </Sider>
            <Content >
              123
            </Content>
          </Layout>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home