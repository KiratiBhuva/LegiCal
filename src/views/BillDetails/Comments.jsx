import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Alert,
  Row,
  Col,
} from "reactstrap";

class Comments  extends React.Component {
    
  render() {
    let data = this.props.data;
    const commentsArray = Object.keys(data).map(value => (
        <Row  className="clearfix">
            <Col sm="3" md = "3" lg="3">value.user</Col>
            <Col sm="9" md = "9" lg= "9">value.comment</Col> 
        </Row>
    )); 
    return (
            <div>
            { this.props.data.length !== 0 ? commentsArray : <Alert color="warning">
                                            No Comments Available.
                                              </Alert>}
            </div>
    );
  }
}
export default Comments;
