import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom"
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { ProtectedRoute } from "./components/ProtectedRoute"
import Login from './components/Login';
//import LoginForm from './components/LoginForm';

export default class App extends Component {
  render() {
    return (
      <div>        
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/db" component={Dashboard} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    )
  }
}