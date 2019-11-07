import React from "react";
import axios from "axios";

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

class Tables extends React.Component {
  constructor(props){
    super(props)
    this.state={
        data : [],
        status : {
          "1":"Introduced",
          "2":"Pass",
          "3":"Fail",
          "4":"Veto",
          "5":"In progress",
        }
    }
  }


  componentWillMount(){
    let self = this;
    axios.get("https://api.legiscan.com/?key=B36e51861aaf4e8d544f86c1ce66fe98&op=getMasterList&state=CA")
    .then(response => {
      console.log(response.data.masterlist);
      self.setState({ data:response.data.masterlist});

    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {

    const CardList = ({ data }) => {
      console.log(data);
      const cardsArray =  Object.keys(data).map(value => (
        
        
        
            <tbody>
              <tr key = {data[value].bill_id}>
                <td>{data[value].number}</td>
                <td>{data[value].title}</td>
                <td>{data[value].description}</td>
                <td >{data[value].last_action}</td>
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
                <th>Last Action</th>
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

export default Tables;
