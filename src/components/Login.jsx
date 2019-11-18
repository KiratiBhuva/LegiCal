import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import login from "../assets/css/login.css";
import config from '../config.js';
import axios from 'axios';
let serverURL = 'http://localhost:5000/';

class Login extends Component {

    state={
        userdata: {
            email: '',
            password: '',
        },
        emailValid: true,
        passwordValid: true,
        msgResult:true
    }

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        let self = this;
        e.preventDefault();
        console.log("Call to page ");
        if(this.validateEmail() === true)
        {
            if(this.validatePassword() === true)
            {
                var data = {
                    "email":this.refs.email.value,
                    "password":this.refs.password.value
                    }
                let self = this;
                console.log("User Data:" + JSON.stringify(data))
                axios.post(serverURL+'user/login',data)
                 .then(function (response) {
                   console.log(response);
                   if(response.data.statusCode == 200)
                   {

                       console.log("Logion successfull");
                       sessionStorage.setItem("user", JSON.stringify(response.data.user));
                       sessionStorage.setItem("org", JSON.stringify(response.data.org));
                       self.props.history.push('/ admin/dashboard');

                   }
                   else{
                    console.log("Logion unsuccessfull");
                     self.setState({msgResult:false})
                   }

                 })
                 .catch(function (error) {
                   self.setState({msgResult:false})
                   console.log(error);
                 });
            }
            else
            {
                this.setState({passwordValid: false})
            }
        }
        else
        {
            this.setState({emailorusernameValid: false})
        }
    }

    validateEmail() {
        var email = this.refs.email.value;
        if (email !== '')
        {
            return (true)
        }
        return (false)
    }
    validatePassword(){
        var password = this.refs.password.value;
        if (password !== '')
        {
            return (true)
        }
        return (false)
    }

    render() {
        return (
            <div className="backgroundLogin">
                <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="cardL card">
                        <div className="cardL-header card-header">
                            <br/>
                            <h3>Sign In</h3>
                        </div>
                        <div >
                            {this.props.loginMsg && (
                                <div className="alert alert-warning text-danger small" role="alert">
                                    {this.props.loginMsg}
                                </div>
                            )}
                        </div>
                        <div className="card-body">
                        { this.state.msgResult ? null : <div className="text-left text-small small alert alert-warning">Username or Password not found.</div>}
                        { this.state.emailorusernameValid ? null : <div className="text-left text-small text-white">Username is required.</div>}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name = "email" className="form-control" placeholder="email"
                                           ref="email"
                                           onFocus={(event) => {
                                           this.setState({emailorusernameValid: true, msgResult : true});
                                    }} />

                                </div>
                                { this.state.passwordValid ? null : <div className="text-left text-small text-white">Password is required.</div>}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input name = "password" type="password" className="form-control" placeholder="password"
                                           ref = "password"
                                           onFocus={(event) => {
                                               this.setState({passwordValid: true , msgResult: true});
                                           }}
                                    />
                                </div>
                                <div className="form-group">
                                    <button name="Login" value="Login" className="btn float-right login_btn"
                                           onClick={(event) => {
                                               this.handleSubmit(event)
                                           }}>Sign In</button>
                                </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="user_signup">Register</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="signup">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default withRouter(Login);
