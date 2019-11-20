import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Status } from "variables/bills-variables.jsx";

class StatusInfo extends React.Component {
    
  render() {
    let data = this.props.data;
    return (
        <div>
            <h6>{ }</h6>
            <h6> Status </h6>
            <p>Bill status : {Status[data.status]}</p>
            <p  className ="d-inline"> Text: <Link to={{
            pathname: "/billtext",
            state: {
                id: data.bill_id
            }
        }} >Get the full text here</Link> </p>
        </div>
    );
  }
}
export default StatusInfo;
