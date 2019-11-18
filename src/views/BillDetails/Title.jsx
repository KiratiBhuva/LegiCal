import React from "react";
import PropTypes from "prop-types";

class Title extends React.Component {
    
  render() {
    let data = this.props.data;
    return (
        <div>
            <h6> Title </h6>
            {data.title}
            <p>Description : {data.description}</p>
        </div>
    );
  }
}
export default Title;
