import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Status } from "variables/bills-variables.jsx";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import routes from "routes.js";

var ps;

class SponserProfile extends React.Component {

    constructor(props){
        super(props);
        const { id } = this.props.location.state
        this.state={
            data : [],
            id: this.props.location.state,
            backgroundColor: "black",
            activeColor: "info"
        }
        this.mainPanel = React.createRef();
      }

      componentDidMount () {
  
        if (navigator.platform.indexOf("Win") > -1) {
          ps = new PerfectScrollbar(this.mainPanel.current);
          document.body.classList.toggle("perfect-scrollbar-on");
        }
        // change here
        const { id } = this.props.location.state
        console.log("Id pass from bills page - Sponser Id ", id);

        let self = this;
            axios.get(" https://api.legiscan.com/?key=c1609cbe5fe798fbe73cf6bd46a779dd&op=getPerson&id=" + id )
            .then(response => {
            console.log("Sponserer details: " + JSON.stringify(response.data.person));
            self.setState(
                { data:response.data.bill });
        
            })
            .catch(error => {
            console.log(error);
            });
      }
  
      componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps.destroy();
          document.body.classList.toggle("perfect-scrollbar-on");
        }
      }
      componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
          this.mainPanel.current.scrollTop = 0;
          document.scrollingElement.scrollTop = 0;
        }
      }
      handleActiveClick = color => {
        this.setState({ activeColor: color });
      };
      handleBgClick = color => {
        this.setState({ backgroundColor: color });
      };
    
  render() {
    return (
        <div className="wrapper">
           <Sidebar
             {...this.props}
             routes={routes}
             bgColor={this.state.backgroundColor}
             activeColor={this.state.activeColor}
           />
           <div className="main-panel" ref={this.mainPanel}>
             <DemoNavbar {...this.props} />
              <div className="content">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4"> Sponser Details </CardTitle>
                  </CardHeader>
                  <CardBody>
                    </CardBody>
                </Card>
              </div>
             <Footer fluid />
           </div>
         </div>
    );
  }
}
export default SponserProfile;
