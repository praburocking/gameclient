import React,{useState,useEffect} from 'react'

//import { Form, Icon, Input, Button, Checkbox,Select } from 'antd';

import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typography from 'antd/es/typography'
//import Checkbox from 'antd/es/checkbox'
import Select from 'antd/es/select'
import {signup,isUserExist} from '../../services/connectToServer'
import {withRouter} from 'react-router-dom'
import {setAuthorizationCookies} from '../../util/common_utils'


const Signup=(props)=>{
  const { getFieldDecorator,getFieldsError,getFieldError,isFieldTouched } = props.form;
  const [isLoading, setLoading]=useState(false)
  const [emailError,setEmailError]=useState(isFieldTouched('email') && getFieldError('email'));
  const {Title} = Typography;
  
  useEffect(()=>{props.form.validateFields()},[]);
  //let emailError = isFieldTouched('email') && getFieldError('email');
  let passwordError = isFieldTouched('password') && getFieldError('password');
  let planError=isFieldTouched('plan') && getFieldError('plan');
  const {Option}=Select;

  function hasErrors(fieldsError) {
    console.log("fieldError",fieldsError);
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
const isExist=async (event)=>
{
  console.log("isExist ",event.target.value)
  if(event.target.value)
  {
    const existResp= await isUserExist(event.target.value);
    console.log("exist ",existResp);
    if(existResp.status===200)
    {
      if(existResp.data.status)
      {
       setEmailError("email-ID already exist");
      }
      else
      {
        setEmailError(false);
      }
    }
  }
}

  const handleSubmit = event => {
    event.preventDefault();

    setLoading(true);
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
          setLoading(false);
          props.history.push("/home")
        }
        else
        {
          setLoading(false);
        props.history.push("/login")
        
        }
       }
       else
       {
         if(signupResp.data && signupResp.data.message)
         {
          message.error(signupResp.data.message);
         }
         else
         {
          message.error("Exception while signing us please try again later");
         }
         
         setLoading(false);
       }
       console.log("signup res",signupResp);

      }
    });
  };

  

  return (<div>
    <Title style={{color:"white"}} level={3} >Sign-up</Title>
    <br/>
    <Form onSubmit={handleSubmit} className="login-form">
  <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''} >
    {getFieldDecorator('email', {
      rules: [{ required: true, message: 'Please input mailID' },{ type:'email', message: 'Please enter the proper E-Mail ID' }],
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Email"
        onBlur={isExist}
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
          placeholder="select your plan"
        >
          <Option value="planA">plan A, 8 User, 3USD/month</Option>
          <Option value="planB">plan B, 12 User, 5USD/month</Option>
        </Select>,
    )}
  </Form.Item>

  
  <Form.Item>
    
    <br/>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button"   disabled={hasErrors(getFieldsError())} loading={isLoading}>
      {!isLoading && "Start Your Free Trial"}
      {isLoading && "Signing You In"}
    </Button>
    
  </Form.Item>
</Form></div>)
}

export default withRouter(Form.create({ name: 'Signup' })(Signup));