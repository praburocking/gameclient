import React,{useState,useEffect} from 'react'
//import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typogrpahy from 'antd/es/typography'

import {connect} from 'react-redux'
import {state_to_props} from '../../util/common_utils'

import {withRouter,Link} from 'react-router-dom'
import {setAuthorizationCookies} from '../../util/common_utils'

import {login} from '../../services/connectToServer'

const setUserDetailsToStore=(user)=>
{
  return {type:"USER_INIT",data:user};
}

const Login=(props)=>{
  const [isLoading,setLoading]=useState(false);
  const { getFieldDecorator,getFieldsError,getFieldError,isFieldTouched } = props.form;
  useEffect(()=>{props.form.validateFields()},[]);
  const emailError = isFieldTouched('email') && getFieldError('email');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  const {Title,Paragraph}=Typogrpahy

  const handleSubmit = e => {
    e.preventDefault();
    console.log("type",setLoading);
    setLoading(true);
    props.form.validateFields( async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const loginRes=await login(values);
        if(loginRes && loginRes.status===200)
        {
        setAuthorizationCookies(loginRes.data)
        props.setUserDetailsToStore(loginRes.data)
        console.log("data =>",props.user);
        message.success("welcome "+loginRes.data.username+" ! ");
        setLoading(false);
        props.history.push('/')
        }
        else
        {
          
        console.log("login Response",loginRes);
        message.error("Exception while Signing-in ");
        setLoading(false);
        }
      }
    });
  };


  return (
  <div>
    <Title level={3} style={{color:"white"}}>Login</Title>
    <br/>
    <Form onSubmit={handleSubmit} className="login-form">
{console.log("from return",props.user.username)}
 <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
    {getFieldDecorator('email', {
      rules: [{ required: true, message: 'Please input mailID' },{ type:'email', message: 'Please enter the proper E-Mail ID' }],
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Email"
      />,
    )}
  </Form.Item>
  <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
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
    {/* {getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true,
    })(<Checkbox>Remember me</Checkbox>)} */}
    
    <br/>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button" loading={isLoading}>
    { !isLoading && "Login" }
    { isLoading && "Loging You In" }
    </Button>
    
  </Form.Item>
</Form>
<Link className="login-form-forgot" to="/forgotpassword">
      Forgot password
    </Link>

</div>)
}

export default connect(state_to_props,{setUserDetailsToStore})(withRouter(Form.create({ name: 'Login' })(Login)));