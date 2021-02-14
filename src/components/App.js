//jshint esversion:6
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUP from './SignUP';
import { AuthProvider } from '../context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import PrivateRoute from './PrivateRoute';
import ForgotPass from './ForgotPass';
import UpdateProfile from './UpdateProfile';


function App() {
  return (
    
    <div className="App ">
    <div className='container mt-5 '>
    <Router>
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path ="/" component = {Dashboard}/>
        <PrivateRoute path ="/update-profile" component = {UpdateProfile}/>
        <Route path ="/signup" component = {SignUP}/>
        <Route path ="/login" component = {LogIn}/>
        <Route path ="/forgot-password" component = {ForgotPass}/>
        

      </Switch>
    </AuthProvider>
    </Router>
    </div>
    </div>
    
  );
}

export default App;
