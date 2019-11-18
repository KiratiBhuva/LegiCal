import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import login from "../assets/css/signup.css";
import config from '../config.js';
import axios from 'axios';
let serverURL = 'http://localhost:5000/';

//axios.defaults.withCredentials = true;

class UserSignUp extends Component {

constructor(props) {
	super(props);
}

signup(e) {
	 e.preventDefault();
	 this.setState({
        email: this.refs.email.value,
        password: this.refs.password.value,
        orgName: this.props.match.params.id
      }, function() {
        axios.post(serverURL +'user/signup',this.state)
                .then(function (response) {
                   console.log(response);
                   if(response.data.statusCode == 200)
                   {
                     console.log("success");

                   }
                   else{
                    console.log("fail");
                   }

                 })
                .catch(function (error) {
                   console.log(error);
                });

      });

}
render() {
	console.log("ID",this.props.match.params.id);
	return (
          <div className="backDrop">
            <div className="container register">
            	 <div className="col-md-9 row register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register with your organization</h3>
                                <div className="row register-form">
                                 <div className="col-md-6">
                                	 	<div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email ID" ref="email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" ref="password" />
                                        </div> 
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder="Confirm Password *" ref="password" />
                                        </div>
                                        <div className="form-group">
											<input type="button" className="btnRegister" onClick={this.signup.bind(this)} value ="SignUp"/>
                                        </div>
                                      </div>
                                 </div>
                             </div>
                        </div>    
                  </div>
              </div>
          </div>
           )
	}
}


export default withRouter(UserSignUp);