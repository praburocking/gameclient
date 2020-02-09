import React from  'react'
//import {Row,Col,Layout,Menu,Form, Icon, Input, Button, Checkbox,Avatar,Typography,Card,Timeline,Carousel} from 'antd'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Avatar from 'antd/es/avatar'
import Typography from 'antd/es/typography'
import Card from 'antd/es/card'
import Timeline from 'antd/es/timeline'
import Carousel from 'antd/es/carousel'

import withRouter from 'react-router-dom/withRouter'
import './landingPage.css'
import Signup from '../signup/signup'

import Header from '../utilComponents/header'

const LandingPage=(props)=>
{
    const {  Content, Footer } = Layout;
    const {Title,Paragraph}=Typography
   // const {Layout,Header}=Layout
    return(
    <Layout className="parallax" style={{backgroundImage:"../media/bg.jpg"}}>
       <Header/>
        <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"1020px" }}>
            <Row style={{minHeight:"720px"}}>
                <Col span={16}>
                <Carousel dotPosition="left"  autoplay style={{margin:15,marginTop:30,minHeight:700,minWidth:400,opacity: 0.5,color:"white"}}>
                    <div style={{minHeight:700,minWidth:400,color:"white"}} >
                     <h3>we are here to tell some awesome things about our product</h3>
                    </div>
                     <div>
                     <h3>we are here to tell some awesome things about our product</h3>
                    </div>
                    <div>
                    <h3>we are here to tell some awesome things about our product</h3>
                    </div>
                     <div>
                     <h3>we are here to tell some awesome things about our product</h3>
                 </div>
                 </Carousel>
                </Col>
                <Col span={7} style={{margin:"15px",marginTop:"120px",background: "rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}} >
            <Signup/>
            
            </Col>
            </Row>
            <Row style={{minHeight:400,margin:"0px",minWidth:"100%",backgroundColor:"white",padding:0,margin:0}}>
                <Col>
                <Row type="flex" justify="center" style={{paddingBottom:"8px"}}>
                    <Col>
                        <Title level={3} >Why Us?</Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between"style={{marginLeft:"15px",marginRight:"15px"}}>
                <Col span={6}  className="alignCenter" >
                    <Avatar shape="square" size={64} icon="user" />
                    <Title level={4} >Title</Title>
                    <Paragraph>we are paragraph write someThing about me</Paragraph>
                    </Col>
                <Col  span={6} className="alignCenter" >
                    <Avatar shape="square" size={64} icon="user" />
                    <Title level={4} >Title</Title>
                    <Paragraph>we are paragraph write someThing about me</Paragraph>
                    </Col>   
                <Col  span={6}  className="alignCenter">
                    <Avatar shape="square" size={64} icon="user" />
                    <Title level={4} >Title</Title>
                    <Paragraph>we are paragraph write someThing about me</Paragraph>
                    </Col>
                <Col  span={6} className="alignCenter" >
                    <Avatar shape="square" size={64} icon="user" />
                    <Title level={4} >Title</Title>
                    <Paragraph>we are paragraph write someThing about me</Paragraph>
                    </Col>
                <Col  span={6}  className="alignCenter">
                    <Avatar shape="square" size={64} icon="user" />
                    <Title level={4} >Title</Title>
                    <Paragraph>we are paragraph write someThing about me</Paragraph>
                    </Col>
                </Row>
                </Col>
                </Row>
                <Row style={{minHeight:200,margin:"0px",minWidth:"100%",padding:0,marginTop:"50px",marginBottom:"50px"}}>
                <Col>

               <Title className="alignCenter" style={{color:"white"}}>Pricing</Title>
               <Row style={{marginBottom:"50px",marginLeft:"40px",marginTop:"50px"}}>
                   <Col span={6}>
                   <Card title={<Title level={4} className="alignCenter" style={{color:"white"}}>Price 1</Title>} className="header"  style={{ width: 350,minHeight:400,color:"white" }} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                 </Col>
                 <Col span={6}>
                 <Card title={<Title level={4} className="alignCenter" style={{color:"white"}}>Price 2</Title>} className="header"  style={{ width: 350, minHeight:400,color:"white" }} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </Col>
                <Col span={6}>
                <Card title={<Title level={4} className="alignCenter" style={{color:"white"}}>Price 3</Title>} className="header"  style={{ width: 350,minHeight:400,color:"white"  }} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </Col>
                <Col span={6}>
            
            <Card title={<Title level={4} className="alignCenter" style={{color:"white"}}>Price 4</Title>} className="header"  style={{ width: 350, minHeight:400 ,color:"white"}} bordered="false" >
                <Timeline style={{color:"white"}}>
                    <Timeline.Item>value1</Timeline.Item>
                    <Timeline.Item>value2</Timeline.Item>
                    <Timeline.Item>value3</Timeline.Item>
                    <Timeline.Item>value4</Timeline.Item>
                </Timeline>
                </Card>
                </Col>
                </Row>
                </Col>
                </Row>
        </Content>
        <Footer >
        <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
           <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
    </Layout>)
}

export default withRouter(LandingPage);