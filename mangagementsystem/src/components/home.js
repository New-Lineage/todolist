import React, { Component } from 'react'
import { Layout, Badge, Dropdown, Avatar, Menu, message ,Icon,Progress ,Tabs,Steps,Divider,Col,Card,Row,Calendar} from 'antd';
import EchartsViews from './EchartsViews';


const {Step} = Steps
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
class Home extends Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
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

 onPanelChange=(value, mode)=> {
    console.log(value, mode);
  }

  render() {
    const { current } = this.state;
    return (
      <Layout className='box2' style={{ width: '100%', height: '100%' ,position:"relative"}}>
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
        {/*上边是 头部 */}
          <Layout style={{padding:'10px',position:"relative"}}>
            <Sider width='25%' style={{ backgroundColor: '#fff',boxShadow:'0 2px 14px 0 rgba(0,0,0,.1)',border:'1px solid #e6ebf5'}}>
              <div style={{height:'60px',fontSize:'20px',textAlign:'center',lineHeight:'60px',borderBottom:'1px solid #e6ebf5'}}>About me</div>
              <div>
                <div style={{width:'90px',height:'90px',borderRadius:'50%',margin:'0 auto',marginTop:'20px'}}><img style={{width:'90px',height:'90px',borderRadius:'50%'}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571737834262&di=218e2acf3a5cf3481b3de38a90b3cf7f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170728%2F5843abd8cdb74745a2fe2349879cb055.jpeg" alt=""/></div>
                <p style={{textAlign:'center',fontWeight:600}}>吴彦祖</p>
                <p style={{textAlign:'center'}}>Daniel Wu</p>
              </div>
              <div style={{paddingLeft:'30px'}}>
                <div style={{width:'90%' ,display:'flex',alignItems:'center',borderBottom:'1px solid #ccc',paddingBottom:'10px'}}>
                  <Icon type="read" />  
                  <span style={{fontWeight:700}}>Education</span>
                </div>
                <span style={{fontSize:'12px'}}>JS in Computer Science from the University of Technology</span>
              </div>
              <div style={{paddingLeft:'30px',marginTop:'20px'}}>
                <div style={{width:'90%' ,display:'flex',alignItems:'center',borderBottom:'1px solid #ccc',paddingBottom:'10px'}}>
                  <Icon type="tags" />  
                  <span style={{fontWeight:700}}>skill</span>
                </div>
                <div style={{width:'90%',paddingBottom:'10px'}}>
                  <span>React</span>
                  <Progress percent={50} status="active" strokeColor='red'/>
                  <span>Vue</span>
                  <Progress percent={25} status="active" />
                  <span>Js</span>
                  <Progress percent={25} status="active" strokeColor='chartreuse' />
                  <span>Css</span>
                  <Progress percent={100}  strokeColor='skyblue'	/>
                  <span>Html</span>
                  <Progress percent={100}   strokeColor='#ccc'/>
                </div>
              </div>
            </Sider>

            <Content >
              <div style={{width:'100%',height:'100%',backgroundColor:'#fff',marginLeft:'20px',boxShadow:'0 2px 12px 2px rgba(0,0,0,.1)',border:'1px solid #e6ebf5'}}>
              <Tabs defaultActiveKey="2"  >
                  <TabPane style={{display:'flex'}}
                    tab={
                      <span>
                        <Icon type="wechat" />
                        The Life
                      </span>
                    }
                    key="1"
                  >
                    <div style={{marginLeft:'20px',marginTop:'20px'}}>
                      <Steps current={current} onChange={this.onChange} direction="vertical">
                          <Step title="Step 1" description="来前锋学习前端" />
                          <Step title="Step 2" description="第一个月学习h5+CSS" />
                          <Step title="Step 3" description="第二个月学习原生JS" />
                          <Step title="Step 4" description="第三个月继续学习原生JS" />
                          <Step title="Step 5" description="第四个月学习Vue框架" />
                          <Step title="Step 6" description="第五个月学习React框架" />
                          <Step title="Step 7" description="第六个月找到工作" />
                          <Step title="Step 8" description="接下来赢娶白富美，走上人生顶峰" />
                      </Steps>
                    </div>
                    <div style={{width:'66%'}}>
                    <Row gutter={10}>
                      <Col className="gutter-row" md={8} style={{width:'100%'}}>
                          <div className="gutter-box">
                              <Card bordered={false}>
                                  <div className="pb-m" style={{marginLeft:'60px',}}>
                                      <h3>访问量统计</h3>
                                      <small>最近7天用户访问量</small>
                                  </div>
                                  <EchartsViews/>
                              </Card>
                          </div>
                      </Col>
                      </Row>
                    </div>   
                  </TabPane>

                  <TabPane
                    tab={
                      <span>
                        <Icon type="star" />
                        date
                      </span>
                    }
                    key="2"
                  >

                      <Calendar onPanelChange={this.onPanelChange} mode='year'/>

                  </TabPane>
                  </Tabs>
              </div>
            </Content> 
          </Layout>


          <Footer>
            *#06#*本网站纯属虚构，如有雷同，纯属巧合
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home



