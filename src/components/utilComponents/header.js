import {Layout,Menu,Row,Col} from 'antd'
import {withRouter,Link} from 'react-router-dom'
import React from 'react'
import { OmitProps } from 'antd/lib/transfer/renderListBody';

const Header=(props)=>
{
    const { Header} = Layout;
    console.log("header",props)
    return(
    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
    <Link to="/"> <div className="logo" /></Link>
        <Row type="flex" justify="end" align="top"><Col>
    <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={props.defaultSelectedKeys}
    style={{ lineHeight: '64px',maxWidth:"200px" }}>
    <Menu.Item key="1" style={{ minWidth:"100px" }} onClick={()=>props.history.push('/login')}>LOGIN</Menu.Item>
    <Menu.Item key="2" style={{ minWidth:"100px" }} onClick={()=>props.history.push('/faq')}>FAQ</Menu.Item>
  </Menu>
  </Col></Row>
    </Header>)
}

export default withRouter(Header);