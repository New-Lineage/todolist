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
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571737834262&di=218e2acf3a5cf3481b3de38a90b3cf7f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170728%2F5843abd8cdb74745a2fe2349879cb055.jpeg"
                         alt="" style={{width:'144px',height:'144px',marginBottom:'20px',borderRadius:'50%'}}/>
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
