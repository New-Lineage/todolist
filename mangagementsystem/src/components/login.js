import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox , Card , message} from 'antd';
import axios from 'axios'
import '../style/login.less'

class Login extends Component {
  constructor(){
    super()
  }
  hanleClick=()=>{
    axios.get('http://yapi.demo.qunar.com/mock/10062/login')
    .then((data)=>{
      message.success(data.data.data.uid,1,()=>{
        this.props.history.push('/admin/first')
      })
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
      <div  className="login-form" style={{width:'350px',height:'200px',position:'fixed',top:'28%',left:'37%'}}>
        <Card>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' },
          {max:11,message:'最大10位'},{min:6,message:'最小6位'}],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="" style={{   float: 'right'}}>
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}} onClick={this.hanleClick}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
        </Card>
      </div>
      </div>
    );
  }

}

export default Form.create()(Login);