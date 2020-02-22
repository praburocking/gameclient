import React from 'react';
//import logo from './logo.svg';
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import './App.css';
import Signup from './components/signup/signup'
import LandingPage from './components/landingPage/landingPage'
import Faq from './components/faq/faq'
import Login from './components/loginPage/loginPage'
import HomePage from './components/homepage/homepage'
import {verifyAndGetToken,find_user_cookie_put_to_store} from './util/common_utils'
import LogOut from './components/logout/logout'
import { Provider } from 'react-redux'
import store from './store/store'
import User from './components/user/user'
import NotFound from './components/404/404'
import ForgotPasswordPage from './components/forgotpassword/forgotpasswordpage'
import ResetPasswordPage from './components/resetPassword/resetPasswordPage'
import VerifyUser from './components/verifyUser'


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
      <Route exact path="/forgotpassword" render={()=>verifyAndGetToken()?<Redirect to="/home"/>:<ForgotPasswordPage/>}></Route>
      <Route exact path="/resetPassword" render={()=>verifyAndGetToken()?<Redirect to="/home"/>:<ResetPasswordPage/>}></Route>
      <Route exact path="/verifyuser" render={()=>verifyAndGetToken()?<Redirect to="/home"/>:<VerifyUser/>}></Route>
      <Route exact path ="/signup" render={()=>verifyAndGetToken()?<Redirect to="/home"/>:<Signup/>}></Route>
      <Route exact path ="/pagenotfound" render={()=><NotFound/>} ></Route>
      <Route  render={()=><Redirect to="/pagenotfound"/>} ></Route>
      </Switch>
    </Provider>
   
  );
}

export default withRouter(App);
