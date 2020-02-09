import React,{useState} from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import Signup from './components/signup/signup'
import LandingPage from './components/landingPage/landingPage'
import Faq from './components/faq/faq'
import Login from './components/loginPage/loginPage'
import HomePage from './components/homepage'
import {verifyAndGetToken,find_user_cookie_put_to_store} from './util/common_utils'
import LogOut from './components/logout/logout'
import { Provider } from 'react-redux'
import store from './store/store'
import User from './components/user/user'


function App(props) {

  if(store.user===null || store.user===undefined)
  {
    console.log("store user added");
    find_user_cookie_put_to_store(store);
  }

  return (
   
   <Provider store={store}>
     {console.log("store =>",store)}
    <Switch location={props.location}>
      <Route exact path ="/" render={()=>verifyAndGetToken()?<Redirect to="/home"/>:<LandingPage/>} ></Route>
      <Route exact path ="/faq" render={()=><Faq/>} ></Route>
      <Route exact path ="/login" render={()=>verifyAndGetToken()?<Redirect to="/home"/>:<Login/>}></Route>
      <Route exact path ="/logout" render={()=>verifyAndGetToken()?<LogOut/>:<Redirect to="/"/>}></Route>
      <Route exact path ="/home" render={()=>verifyAndGetToken()?<HomePage/>:<Redirect to="/"/>} ></Route>
      <Route exact path ="/user" render={()=>verifyAndGetToken()?<User/>:<Redirect to="/"/>} ></Route>
      <Route exact path ="/signup" ><Signup/></Route>
      </Switch>
    </Provider>
   
  );
}

export default withRouter(App);
