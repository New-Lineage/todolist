import React,{Component} from 'react'
import {Form,Input,Tooltip,Icon,Cascader,Button,Upload} from 'antd';
    const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
        {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
            {
                value: 'xihu',
                label: 'West Lake',
            },
            ],
        },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
        {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
            {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            },
            ],
        },
        ],
    },
    ];

    class RegistrationForm extends Component {
        render() {
            return (
                <div style={{display:'flex'}}>
                    <Form >
                            <p style={{fontSize:'20px'}}>基本设置</p>
                            <Form.Item label="E-mail" style={{margin:0}}>
                        <Input />
                            </Form.Item>
                            <Form.Item label="Password"  style={{margin:0}}>
                            <Input.Password />
                            </Form.Item>
                            <Form.Item label="Confirm Password" style={{margin:0}}>
                            <Input.Password onBlur={this.handleConfirmBlur} />
                            </Form.Item>
                            <Form.Item label={
                            <span> Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>} style={{margin:0}}>

                            <Input />
                            </Form.Item>
                            <Form.Item label="Habitual Residence" style={{margin:0}}>
                            <Cascader options={residences} />
                            </Form.Item>
                            <Form.Item label="Phone Number" style={{margin:0}}>
                            <Input  style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                            </Form.Item>
                            </Form>
                                
                        <div style={{margin:'50px 0 0 200px',display:'flex',flexDirection:'column',textAlign:'center'}}>
                        <p>头像</p>
                        <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="" style={{width:'144px',height:'144px',marginBottom:'20px'}}/>
                        <Upload >
                        <Button>
                            <Icon type="upload" /> 上传头像
                        </Button>
                        </Upload>
                    </div>
                </div>
            
            );
        }
    }
export default RegistrationForm
