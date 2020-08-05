import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Default from './Components/Default';
import LogoPage from './Components/LogoPage';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home';



function App() {
  return(
    <>
      <Switch>      
        <Route exact path="/" component={LogoPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />                
        <Route path="/home" component={Home} />                
        <Route component={Default} />
      </Switch>      
    </>
  )
}

export default App;