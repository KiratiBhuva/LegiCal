import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import {decode as atob, encode as btoa} from 'base-64';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Speech from "speak-tts";
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import Title from "./Title.jsx";
import History from "./BillHistory.jsx";
import Rollcall from "./Rollcall.jsx";
import Sponsers from "./Sponsers.jsx";
import StatusInfo from "./StatusInfo.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  button
} from "reactstrap";

import routes from "routes.js";

var ps;

class BillText extends React.Component {
    constructor(props){
      super(props);
      const { id } = this.props.location.state
      this.state={
          data : "",
          pause : false,
      }
      this.mainPanel = React.createRef();
      this.textToSpeech = this.textToSpeech.bind(this);
    }
  
    componentDidMount () {

      if (navigator.platform.indexOf("Win") > -1) {
        ps = new PerfectScrollbar(this.mainPanel.current);
        document.body.classList.toggle("perfect-scrollbar-on");
      }

      

      const { id } = this.props.location.state
      console.log("Id passed from bills home", id);

      let self = this;
        axios.get(" https://api.legiscan.com/?key=c1609cbe5fe798fbe73cf6bd46a779dd&op=getBillText&id=" + id )
        .then(response => {
          console.log(response.data.text.doc);
          self.setState(
            { data:response.data.text.doc,
            });
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


    textToSpeech() {
      let self = this;
        const speech = new Speech() // will throw an exception if not browser supported
        if(speech.hasBrowserSupport()) { // returns a boolean
            console.log("speech synthesis supported")
        }
        // console.log(document.getElementById('billtext'));
        speech.speak({
            text: window.atob(this.state.data),
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
    }

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

             {/*  Added by Kirati - Start */}

              <div className="content">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4" className="float-left">Bill Text</CardTitle>
                  </CardHeader>
                  <CardBody>
                      <div className ="clearfix" >
                        <div id = "billtext">
                          <div className="float-left" id = "billtext" dangerouslySetInnerHTML= {{ __html: window.atob(this.state.data) }} />
                        </div>
                        <button className="btn btn-danger"
                              outline
                              size="sm" onClick={this.textToSpeech}><i className="nc-icon nc-button-play" /></button>
                      </div>
                  </CardBody>
                </Card>
 
              </div>
             {/* End */}
             <Footer fluid />
           </div>
         </div>
      );
    }
  }
  
  export default BillText;
  