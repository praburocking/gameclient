import React,{useState} from 'react'
//import {Form} from 'antd'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

// const Signup=(props)=>
// {
//     return(<div>signup</div>)
// }

//export default Signup;


const Login=(props)=>{

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (<div><Form onSubmit={handleSubmit} className="login-form">
  <Form.Item>
    {getFieldDecorator('username', {
      rules: [{ required: true, message: 'Please input your username!' }],
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
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
        size="large"
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
    <a className="login-form-forgot" href="">
      Forgot password
    </a>
    <br/>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button">
      Login
    </Button>
    
  </Form.Item>
</Form></div>)
}

export default Form.create({ name: 'Login' })(Login);