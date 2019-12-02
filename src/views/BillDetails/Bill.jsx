import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Status } from "variables/bills-variables.jsx";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import Title from "./Title.jsx";
import History from "./BillHistory.jsx";
import Rollcall from "./Rollcall.jsx";
import Sponsers from "./Sponsers.jsx";
import StatusInfo from "./StatusInfo.jsx";
import Comments from "./Comments.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  button,
  Input
} from "reactstrap";

import routes from "routes.js";

var ps;

let serverURL = 'http://localhost:5000/';
class Bills extends React.Component {
    constructor(props){
      super(props);
   //   const { id } = this.props.location.state
      this.state={
          data : [],
          id: this.props.location.state.id,
          bill: this.props.location.state.bill,
          backgroundColor: "black",
          activeColor: "info",
          watchListMsg: "Add to watchList",
          addToWatchListBtn : false,
          session : "",
          history: [] ,
          rollcall: [] ,
          amendments: [] ,
          calendar: [] ,
          committee:[] ,
          progress: [], 
          session: [],
          sponsors: [],
          texts: [],
          votes: [],
          comment : "",
          comments : [],
      }
      this.mainPanel = React.createRef();
      this.saveToWatchList = this.saveToWatchList.bind(this);
      this.handlecomment = this.handlecomment.bind(this);
      this.addComment = this.addComment.bind(this);
    }
    handlecomment(e) {
      this.setState({comment: e.target.value});
    }

    addComment() {
      let self = this;
      let comment = {
        uuid : JSON.parse(sessionStorage.getItem("org")).uuid, 
        commentedby : JSON.parse(sessionStorage.getItem("user")).email,
        comment : this.state.comment
      }

      let payload = {
        comment: comment,
        billId: this.state.id
      }

    //  let arr =[];
     // arr = this.state.comments? this.state.comments.concat(comment): arr.push(comment);

      if(payload.comment) {
        console.log("Payload", payload);
        axios.post(serverURL + 'user/addComment/',payload)
                .then(function (response) {
                   if(response.data.statusCode == 200)
                   {
                     // self.setState({ 
                     //    comments : arr
                     //  }, () => {
                     //  });

                     axios.post(serverURL + 'bill/getComments',payload)
                      .then(function (response) {
                         console.log(response);
                         if(response.data.statusCode == 200)
                         {
                            self.setState({ 
                              comments :response.data.comments,
                            });
                         }
                         else{
                          console.log("fail");
                         }

                       })
                      .catch(function (error) {
                         console.log(error);
                       });

                     
                   }
                   else{
                    console.log("fail");
                   }

                 })
                .catch(function (error) {
                   console.log(error);
       });
      }
    }

    saveToWatchList() {
      let user = JSON.parse(sessionStorage.user);
      let payload = {
          email : user.email,
          bill: this.state.bill
      }
      this.setState({watchListMsg: "Added To WatchList", addToWatchListBtn:true});
      axios.post(serverURL + 'user/watchlist/create',payload)
                .then(function (response) {
                   if(response.data.statusCode == 200)
                   {
                     console.log("success");
                   }
                   else{
                    console.log("fail");
                   }

                 })
                .catch(function (error) {
                   console.log(error);
       });

    }
  

  componentDidUpdate() {
    let self = this;
    if(this.state.id) {
      let payload = {
          billId : this.state.id
        }
        axios.post(serverURL + 'bill/getComments',payload)
                .then(function (response) {
                   if(response.data.statusCode == 200)
                   {
                      self.setState({ 
                        comments :response.data.comments,
                      });
                   }
                   else{
                    console.log("fail");
                   }

                 })
                .catch(function (error) {
                   console.log(error);
       });
    }
  }
  

    componentDidMount () {

      if (navigator.platform.indexOf("Win") > -1) {
        ps = new PerfectScrollbar(this.mainPanel.current);
        document.body.classList.toggle("perfect-scrollbar-on");
      }

      const { id } = this.props.location.state

      let self = this;
        axios.get(" https://api.legiscan.com/?key=c1609cbe5fe798fbe73cf6bd46a779dd&op=getBill&id=" + id )
        .then(response => {
          self.setState(
            { data:response.data.bill,
              session:response.data.bill.session,
              history: response.data.bill.history ,
              rollcall: response.data.bill.rollcall ,
              amendments: response.data.bill.amendments ,
              calendar: response.data.bill.calendar ,
              committee:response.data.bill.committee ,
              progress: response.data.bill.progress , 
              session: response.data.bill.session,
              sponsors: response.data.bill.sponsors,
              texts: response.data.bill.texts,
              votes: response.data.bill.votes
            });
    
        })
        .catch(error => {
          console.log(error);
        });

        let payload = {
          billId : id
        }
        axios.post(serverURL + 'bill/getComments',payload)
                .then(function (response) {
                   console.log(response);
                   if(response.data.statusCode == 200)
                   {
                      self.setState({ 
                        comments :response.data.comments,
                      });
                   }
                   else{
                    console.log("fail");
                   }

                 })
                .catch(function (error) {
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

             {/*  Added by Kirati - Start */}

              <div className="content">
                <Card>
                  <CardHeader className="clearfix">
                    <CardTitle tag="h4" className="float-left"> {this.state.data.state} | {this.state.data.bill_number} | {this.state.session.session_name} </CardTitle>
                    <button className="btn btn-danger float-right" onClick={this.saveToWatchList} disabled={this.state.addToWatchListBtn}>{this.state.watchListMsg}</button>
                  </CardHeader>
                  <CardBody>
                      <Title data={this.state.data} />
                    <StatusInfo data = {this.state.data} />
                    </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <Rollcall data={this.state.votes} />
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <Sponsers data={this.state.sponsors} />
                  </CardBody>
                </Card>
                
                <History data={this.state.history} />

                {/* Comment Section */}

                <div>
                  
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle tag="h4" className="float-left"> Comments </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row  className="clearfix">
                      <Col xs="9"><Input type="text" name="billcomment" id="billcomment" placeholder="Add your comment here" onChange={this.handlecomment}/></Col>
                      <Col xs="3"><button className="btn btn-danger float-right" onClick={this.addComment}><i className="nc-icon nc-chat-33" />   Post Comment</button></Col>
                      <div style={{margin : 20}}> {''}</div>
                    </Row>
                    <Comments data = {this.state.comments} />
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
  
  export default Bills;
  