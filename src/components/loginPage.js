import React,{useState,useEffect} from 'react'
import {Row,Col,Layout,Menu,Form, Icon, Input, Button, Checkbox,Avatar,Typography,Card,Timeline,Carousel} from 'antd'
import Header from './utilComponents/header'
import Login from './login'

const LoginPage=(props)=>
{ const {  Content, Footer } = Layout;
    const {Title,Paragraph}=Typography
    return(<Layout className="parallax" style={{backgroundImage:"bg.jpg"}}>
   <Header defaultSelectedKeys={['1']}/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px"}}>
     <Row className="alignCenter"> 
         <Col span={8}></Col>
          <Col span={8}  style={{margin:"15px",marginTop:"120px",background: "rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}} >
     <Login/>
     </Col>
     <Col span={8}></Col>
     </Row>
    
    </Content>
    <Footer >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default LoginPage;
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}