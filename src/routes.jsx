
import React  from "react";
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


  export default function Routes(){

    const logado=localStorage.getItem('@user')

    return (
      <Router>
      <Switch>

        {!logado && <Route path="/" exact component={Login}/>}
        {logado && <Route path="/" exact component={Home}/>}


      </Switch>
      </Router>
    );
    
  }