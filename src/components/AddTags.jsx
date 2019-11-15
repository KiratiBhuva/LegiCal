import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import login from "../assets/css/signup.css";
import config from '../config.js';
import axios from 'axios';


class AddTags extends Component {
  render(){

      return (
          <div className="container">
            <ul className="list-group text-center">
              {
                Object.keys(this.props.fruits).map(function(key) {
                  return <li className="list-group-item list-group-item-info">{this.props.fruits[key]}</li>
                }.bind(this))
              }
            </ul>
           </div>
         );


  }
}
export default withRouter(AddTags);
