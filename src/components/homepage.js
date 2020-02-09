import React,{useState,useEffect} from 'react'
//import {Row,Col,Layout,Typography,Card,Timeline,Carousel} from 'antd'

import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Typography from 'antd/es/typography'




import Header from './utilComponents/header'


const HomePage=(props)=>
{ const {  Content, Footer } = Layout;
    const {Title,Paragraph}=Typography
    return(<Layout className="parallax" style={{backgroundImage:"../media/bg.jpg"}}>
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px"}}>
    
    </Content>
    <Footer >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default HomePage;
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}