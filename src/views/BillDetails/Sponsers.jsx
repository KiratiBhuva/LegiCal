import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Alert,
} from "reactstrap";

class Sponsers extends React.Component {
    
  render() {
    let data = this.props.data;
    const sponsersArray = Object.keys(data).map(value => (
        <Badge color="dark" style={{margin:5}}><Link style={{color:'#fffafa', font:17 }} to={{
            pathname: "/sponser",
            state: {
              id: data[value].people_id
            }
        }} >{data[value].first_name} {data[value].last_name}</Link></Badge> 
    )); 
    return (
        <div className ="d-inline" >
            <h6> Sponsers </h6>
            <div  className ="d-inline">
            {this.props.data.length !== 0  ? sponsersArray : <Alert color="warning">
                                            No Sponsers Available.
                                              </Alert>}
            </div>
        </div>
    );
  }
}
export default Sponsers;
