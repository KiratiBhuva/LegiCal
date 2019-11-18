import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
  } from "reactstrap";
import { Chamber } from "variables/bills-variables.jsx";

class BillHistory extends React.Component {
    
  render() {
    const CardList = ({ data }) => {
        // console.log(data);
        const cardsArray =  Object.keys(data).map(value => (
                <tr>
                  <td width={'15%'} >{data[value].date}</td>
                  <td width={'15%'} >{Chamber[data[value].chamber]}</td>
                  <td colSpan={6}>{data[value].action}</td>
                </tr>
        ));
      
        return (
          <div>
                <Table responsive size="sm" hover>
                        <tr className="text-primary">
                            <th  width={'15%'} >Date</th>
                            <th  width={'15%'} >Chamber</th>
                            <th colSpan={6}>Action</th>
                        </tr>
                        {cardsArray}
                </Table>
          </div>
        );
      };
    
    return (
        <div className="content">
            <Card>
                <CardBody>
                    <h6> History </h6>
                    <Row>
                        <Col md="12">
                            <CardList data={this.props.data} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
  }
}
export default BillHistory;
