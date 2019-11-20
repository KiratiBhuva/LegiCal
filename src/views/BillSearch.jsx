import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import States from "../variables/states.jsx";
import BillTable from "../components/BillTable.jsx";

// import { Base64 } from 'js-base64';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  Button,
  Input,
  Col,
} from "reactstrap";

import routes from "routes.js";

var ps;

class BillSearch extends React.Component {
    
    constructor(props){
      super(props);
        this.state = {
            bills: [],
            dropDownValue: 'Select action',
            dropdownOpen: false,
            usStates : States.states,
            stateid : "",
            billname : "",
            billtext : "",
            stateValidationMsg: false,
            showResults : false
      }
      this.toggle = this.toggle.bind(this);
      this.changeValue = this.changeValue.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeBillNo = this.changeBillNo.bind(this);
      this.changeBillText = this.changeBillText.bind(this);
    }
  
    componentDidMount () {

    //   const { id } = this.props.location.state
    //   console.log("Id passed from bills home", id);

    //   let self = this;
    //     axios.get(" https://api.legiscan.com/?key=c1609cbe5fe798fbe73cf6bd46a779dd&op=getBillText&id=" + id )
    //     .then(response => {
    //       console.log(response.data.text.doc);
    //       self.setState(
    //         { data:response.data.text.doc,
    //         });
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    }

    toggle(event) {
      this.setState({
          dropdownOpen: !this.state.dropdownOpen
      });
    }

    changeValue(e) {
      this.setState({dropDownValue: e.currentTarget.textContent , stateid : e.currentTarget.getAttribute("id"), stateValidationMsg : false});
      let id = e.currentTarget.getAttribute("id");
      console.log(id);
    }

    changeBillText(e) {
      this.setState({billtext: e.target.value});
    }

    changeBillNo(e) {
      this.setState({billname: e.target.value});
    }


    handleSubmit() {

      console.log("Inside handle submit");
      let state = this.state.stateid;
      let billname = this.state.billname;
      let billtext = this.state.billtext;

      if(state) {
        console.log("Inside handle submit validation msg");
         let query = "https://api.legiscan.com/?key=c1609cbe5fe798fbe73cf6bd46a779dd&op=search&state=" + state ;
         if(billname) {
            query = query + "&bill=" + billname;
         }
         if(billtext) {
           query = query + "&query=" + billtext;
         }

         console.log("Query : " , query);

          let self = this;
          axios.get(query)
          .then(response => {
            console.log(response.data);
            self.setState(
              { bills:response.data.searchresult, showResults : true
              });
          })
          .catch(error => {
            console.log(error);
          });

      }
      else {
        this.setState({stateValidationMsg: true});
      }

      
    }


    render() {

  
      return (
              <div className="content">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4" className="float-left">Advance Bill Search</CardTitle>
                  </CardHeader>
                  <CardBody md="12">

                  <Label for="exampleState"  style={{"font-size" : 15 , "color" : "black"}}>Select State</Label> <Label for="exampleState" style={{"font-size" : 10 }}>(Target national or local state search.)</Label>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="right">
                    <DropdownToggle caret>
                        {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu modifiers={{
                                      setMaxHeight: {
                                        enabled: true,
                                        order: 890,
                                        fn: (data) => {
                                          return {
                                            ...data,
                                            styles: {
                                              ...data.styles,
                                              overflow: 'auto',
                                              maxHeight: 200,
                                            },
                                          };
                                        },
                                      },
                                    }}>
                        {this.state.usStates.map(e => {
                            return <DropdownItem id={e.abbreviation} key={e.abbreviation} onClick={this.changeValue}>{e.name}</DropdownItem>
                        })}
                    </DropdownMenu>
                  </Dropdown>
                  {this.state.stateValidationMsg ? <Label for="exampleState"  style={{"font-size" : 15 , "color" : "red"}}>Please select state</Label> : null}
                  <div style={{margin : 20}}> {''}</div>
                 
                  
                  <Label for="exampleState" style={{"font-size" : 15 , "color" : "black" }}>Bill Number</Label><Label for="exampleState" style={{"font-size" : 10 }}>Search for an exact bill number (Optional).</Label>
                  <Col sm={10}  md = {6}  lg = {6}>
                    <Input type="text" name="billno" id="billno" placeholder="AB1" onChange={this.changeBillNo}/>
                  </Col>
                  <div style={{margin : 20}}> {''}</div>
                

                  <Label for="exampleState" style={{"font-size" : 15 , "color" : "black" }}>Full Text Search</Label>
                  <Col sm={12}  md = {6}  lg = {6}>
                    <Input type="textarea" name="billtext" id="billtext" placeholder="Add text" onChange={this.changeBillText}/>
                  </Col>
                  <div style={{margin : 20}}> {''}</div>

                  <Button color="info" onClick={this.handleSubmit}>Submit</Button>
                  <div style={{margin : 20}}> {''}</div>

                  {this.state.showResults ? <BillTable data = {this.state.bills} /> : null}

                 </CardBody>
                </Card>

              </div>
              )}
  }
  
  export default BillSearch;
  