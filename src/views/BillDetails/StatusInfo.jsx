import React from "react";
import PropTypes from "prop-types";

class StatusInfo extends React.Component {
    
  render() {
    let data = this.props.data;
    return (
        <div>
            <h6>{ }</h6>
            <h6> Status </h6>
            <p> Text: </p> 
        </div>
    );
  }
}
export default StatusInfo;
