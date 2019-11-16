import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";

class Sponsers extends React.Component {
    
  render() {
    let style ={display:"inline"}
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
                {sponsersArray}
            </div>
        </div>
    );
  }
}
export default Sponsers;
