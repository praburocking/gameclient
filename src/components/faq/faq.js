import React from 'react'
// import {Layout,Typography,Collapse} from 'antd'
import Collapse from 'antd/es/collapse';
import Layout from 'antd/es/layout'
import Typography from  'antd/es/typography'
import Header from '../utilComponents/header'
import './faq.css'

const Faq=(props)=>
{ const {  Content, Footer } = Layout;
const {Panel}=Collapse;
const {Title}=Typography;
const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

    return(
    <Layout className="parallax layout-bg" >
   <Header defaultSelectedKeys={['2']}/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"1020px",marginLeft:"80px",marginRight:"80px",marginTop:"120px" }}>
     <Title className="alignCenter" style={{color:"white"}}>FAQ</Title>
    <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1">
      {text}
    </Panel>
    <Panel header="This is panel header 2" key="2">
      {text}
    </Panel>
    <Panel header="This is panel header 3" key="3">
      {text}
    </Panel>
  </Collapse>


    </Content>
    <Footer >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default Faq;