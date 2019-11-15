import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import login from "../assets/css/signup.css";
import config from '../config.js';
import axios from 'axios';


class SignUp extends Component {

    // state={
    //     userdata: {
    //         organizationName: '',
    //         tags:'',
    //         email: '',
    //         password: '',
    //     },
    //
    // }

    constructor(props){
        super(props);
        this.state ={
          organizationName: '',
          email: '',
          password: '',
          address:'',
          phoneNumber:'',
          tags:[]
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("Call to page ");

    }

    goToLogin(){
      this.props.history.push('/login')
    }
    register(e){
      e.preventDefault();
      this.setState({
        organizationName: this.refs.organizationName.value,
        email: this.refs.email.value,
        password: this.refs.password.value,
        address:this.refs.address.value,
        phoneNumber:this.refs.phoneNumber.value

      },()=>console.log(this.state));

    }
    addTags(e){
      e.preventDefault();
        //get the fruit object name from the form
        var fruit = this.refs.fruitName.value;

        //if we have a value
        //call the addFruit method of the App component
        //to change the state of the fruit list by adding an new item
        if(typeof fruit === 'string' && fruit.length > 0) {
          // var timestamp = (new Date()).getTime();
         // update the state object
         var temp = this.state.tags;
         temp.push(fruit);
         // this.state.tags['tag-' + timestamp ] = fruit;
         // set the state
         this.setState({ tags : temp });


        }
    }

    render() {
        return (
          <div className="backDrop">
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from being an informed citizen</p>
                        <button onClick={this.goToLogin.bind(this)}>Login</button><br/>
                    </div>
                    <div className="col-md-9 register-right">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register your organization</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Organization Name *" ref="organizationName"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email *" ref="email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" ref="password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder="Confirm Password *" ref="password" />
                                        </div>

                                    </div>
                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address *" ref="address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" minLength="10" maxLength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *" ref="phoneNumber" />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="fruitItem">
                                            Add Tags
                                            <input type="text" id="fruitItem" placeholder="e.x.food" ref="fruitName" className="form-control" />
                                          </label>
                                          <button className="btn btn-primary" onClick={this.addTags.bind(this)}>Add Tag</button>
                                        </div>
                                        <div>
                                          <ul className="list-group text-center">
                                            {
                                              Object.keys(this.state.tags).map(function(key) {
                                                return <li className="list-group-item list-group-item-info" key={key}>{this.state.tags[key]}</li>
                                              }.bind(this))
                                            }
                                          </ul>
                                         </div>
                                        <button className="btnRegister" onClick={this.register.bind(this)}> Register</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
          </div>
        );
    }
}
export default withRouter(SignUp);
