import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Status } from "variables/bill-status.jsx";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class BillsHome extends React.Component {
  constructor(props){
    super(props)
    this.state={
        data : [],
    }
    // this.handleBillClick = this.handleBillClick.bind(this);
  }

  componentWillMount(){
    let self = this;
    axios.get("https://api.legiscan.com/?key=B36e51861aaf4e8d544f86c1ce66fe98&op=getMasterList&state=CA")
    .then(response => {
      // console.log(response.data.masterlist[0]);
      self.setState({ data:response.data.masterlist});

    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {

    const CardList = ({ data }) => {
      // console.log(data);
      const cardsArray =  Object.keys(data).map(value => (
        
            <tbody>
              <tr key = {data[value].bill_id}>
                <td><Link to={{
                      pathname: '/bill',
                      state: {
                        id: data[value].bill_id
                      } 
                      }} >{data[value].number}</Link></td>
                <td>{data[value].title}</td>
                <td>{data[value].description}</td>
                <td >{Status[data[value].status]}</td>
              </tr>
            </tbody>
        
      ));
    
      return (
        <div>
          <Card>
        <CardHeader>
          <CardTitle tag="h4">Bills</CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>Bill Number</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
          {cardsArray}
          </Table>
        </CardBody>
      </Card>

        </div>
      );
    };

    return (
      
        <div className="content">
          <Row>
          <Col md="12">
          <CardList data={this.state.data} />
          </Col>
          </Row>
        
        </div>

    );
  }
}

export default BillsHome;
