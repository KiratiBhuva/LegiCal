import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Status } from "variables/bill-status.jsx";

class Bills extends React.Component {
    constructor(props){
      super(props);
      const { id } = this.props.location.state
      this.state={
          data : [],
          id: this.props.location.state,
      }
    }
  
    componentDidMount () {
    const { handle } = this.props.match.params
    const { id } = this.props.location.state
    console.log("Id passed from bills home", id);

    let self = this;
      axios.get(" https://api.legiscan.com/?key=c1609cbe5fe798fbe73cf6bd46a779dd&op=getBill&id=" + id )
      .then(response => {
        console.log(response.data.bill);
        self.setState({ data:response.data.bill});
  
      })
      .catch(error => {
        console.log(error);
      });

    }
    render() {

  
      return (
        
          <div className="content">
              
          </div>
  
      );
    }
  }
  
  export default Bills;
  