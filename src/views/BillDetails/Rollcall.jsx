import React from "react";
import PropTypes from "prop-types";
import { Chamber, IsPass } from "variables/bills-variables.jsx";
import { Link } from "react-router-dom";

class Rollcall extends React.Component {
    
  render() {
    let data = this.props.data;

    const rollcallArray = Object.keys(data).map(value => (
        <ul className="list-group ">
            <div className ="d-inline">{data[value].date} - {Chamber[data[value].chamber]} - <a href={data[value].state_link} className="d-inline">{data[value].desc}</a> - (Y: {data[value].yea} N: {data[value].nay} NV: {data[value].nv} Abs: {data[value].absent}) [{IsPass[data[value].passed]}]</div>
        </ul>
    ));
    return (
        <div>
            <h6> </h6>
            <h6> Roll Calls </h6>
            {rollcallArray}
        </div>
    );
  }
}
export default Rollcall;
