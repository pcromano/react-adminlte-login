import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './PostData.js';
//import auth from "./Auth";
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if (this.state.username && this.state.password) {    
            //auth.isAuthenticated=true
            //this.setState({ redirectToReferrer: true });
            //return;        
            PostData('login', this.state).then((result) => {                
                let responseJson = result;
                if (responseJson.userData) {                    
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                } else if(responseJson.error) {
                    console.log(responseJson.error.text)                    
                }
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/dashboard'} />)
        }

        return (
            <div className="row" id="Body">
                <div className="medium-5 columns left">
                    <h4>Login</h4>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.onChange} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.onChange} />
                    <input type="submit" value="Login" onClick={this.login} />
                    <a href="/signup">Registration</a>
                    
                </div>
            </div>
        );
    }
}
export default Login;