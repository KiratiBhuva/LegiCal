import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Status } from "variables/bills-variables.jsx";
import { Spinner } from "reactstrap";
import login from "../assets/css/login.css";

// reactstrap components
import {
  Table,
  Alert,
} from "reactstrap";

class BillTable extends React.Component {
  
  
  render() {
    let data = this.props.data;
      const cardsArray = Object.keys(data).map(value => (
        
            <tbody>
              <tr key = {data[value].bill_id}>
                <td><Link to={{
                          pathname: "/bill",
                          state: {
                            id: data[value].bill_id,
                            bill: data[value]
                          }
                }}>{data[value].bill_number}</Link></td>
                <td>{data[value].title}</td>
                <td>{data[value].relevance}</td>
              </tr>
            </tbody>
        
      ));

    // let org = JSON.parse(sessionStorage.org);
    return (
        <div className="content">
            {this.props.data.summary.count !== null ?
            <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Bill Number</th>
                    <th>Title</th>
                    <th>Relevance</th>
                  </tr>
                </thead>
                {cardsArray}
              </Table> :  <Alert color="warning">
                            No Records Available.
            </Alert> }
        </div>

    );
  }
}

export default BillTable;
