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
  CardFooter,
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
              <Card className="card-user">
                <div className="image">
                  <div
                    backgroundColor = "grey"
                    bgColor = "grey"
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src="https://c8.alamy.com/comp/T3A56N/law-icon-vector-with-male-person-profile-avatar-with-building-symbol-for-legal-and-justice-in-glyph-pictogram-illustration-T3A56N.jpg"
                      />
                    <h5 className="title">{this.state.data}</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p className="description text-center">
                    "I like the way you work it <br />
                    No diggity <br />I wanna bag it up"
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Files</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2GB <br />
                          <small>Used</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          24,6$ <br />
                          <small>Spent</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              </div>
             <Footer fluid />
           </div>
         </div>
    );
  }
}
export default SponserProfile;
