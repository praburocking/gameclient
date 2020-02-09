import React,{useState,useEffect} from 'react'

//import { Form, Icon, Input, Button, Checkbox,Select } from 'antd';

import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
//import Checkbox from 'antd/es/checkbox'
import Select from 'antd/es/select'
import {signup} from '../../services/connectToServer'
import {withRouter} from 'react-router-dom'
import {setAuthorizationCookies} from '../../util/common_utils'


const Signup=(props)=>{
  const { getFieldDecorator,getFieldsError,getFieldError,isFieldTouched } = props.form;
  useEffect(()=>{props.form.validateFields()},[]);
  const emailError = isFieldTouched('email') && getFieldError('email');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  const planError=isFieldTouched('plan') && getFieldError('plan');
  const {Option}=Select;

  function hasErrors(fieldsError) {
    console.log("fieldError",fieldsError);
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }


  const handleSubmit = event => {
    event.preventDefault();
    console.log("form",event.target.email)
    props.form.validateFields( async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
       const signupResp=await signup(values);
       if(signupResp.status===200)
       {
        if(signupResp.data.token)
        {
          setAuthorizationCookies(signupResp.data);
          message.success("welcome "+signupResp.data.username+ " !")
          props.history.push("/home")
        }
        else
        {
        props.history.push("/login")
        }
       }
       console.log("signup res",signupResp);

      }
    });
  };

  

  return (<div><Form onSubmit={handleSubmit} className="login-form">
  <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''} >
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

  <Form.Item validateStatus={planError ? 'error' : ''} help={planError || ''}>
    {getFieldDecorator('plan', {
      rules: [{ required: true, message: 'Please select a plan' }],
    })(
      <Select
          size="large" 
        >
          <Option value="planA">plan A, 8 User, 3USD/month</Option>
          <Option value="planB">plan B, 12 User, 5USD/month</Option>
        </Select>,
    )}
  </Form.Item>

  
  <Form.Item>
    
    <br/>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button"   disabled={hasErrors(getFieldsError())}>
      Start Your Free Trial
    </Button>
    
  </Form.Item>
</Form></div>)
}

export default withRouter(Form.create({ name: 'Signup' })(Signup));