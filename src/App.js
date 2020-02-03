import React,{useState} from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';
import Signup from './components/signup'
import LandingPage from './components/landingPage'
import Faq from './components/faq'
import Login from './components/loginPage'
function App() {

  return (
    <Router>
    
      <Route exact path ="/" render={()=><LandingPage/>} ></Route>
      <Route exact path ="/faq" render={()=><Faq/>} ></Route>
      <Route exact path ="/login" render={()=><Login/>} ></Route>
      <Route exact path ="/signup" ><Signup/></Route>
    </Router>
  );
}

export default App;
