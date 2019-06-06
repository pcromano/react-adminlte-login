import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './PostData.js';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        sessionStorage.clear();
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if (this.state.username && this.state.password) {
            PostData('login', JSON.stringify(this.state))
                .then(responseJson => {
                    if (responseJson.userData) {
                        sessionStorage.setItem('userData', JSON.stringify(responseJson));
                        this.setState({ redirectToReferrer: true });
                    } else if (responseJson.error) {
                        sessionStorage.clear();
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
            <div className="loginform center" style={{'text-align':'center','padding':50}}>                
                <p>
                <label className="bold">Username</label>
                <input type="text" name="username" onChange={this.onChange} />
                <br />
                <label>Password</label>
                <input type="password" name="password" onChange={this.onChange} />
                </p>
                <p>
                <input type="button" value="Login" onClick={this.login} />
                </p>
                <p><em>For testing only. Enter any username and password combination.</em></p>
            </div>
        );
    }
}
export default Login;