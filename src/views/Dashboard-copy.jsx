/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardBillStatusChart,
  dashboardNASDAQChart,
  map
} from "variables/charts.jsx";

class Dashboard extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

    let org = {
    "statusCode": 200,
    "message": "Retrieved organization successfully",
    "org": {
        "ord_id": 1,
        "bills": [
            {
                "bill_id": "1132059",
                "number": "AB3",
                "change_hash": "39bb633b8b80ee8223fc7b83814ca705",
                "url": "https://legiscan.com/CA/bill/AB3/2019",
                "status_date": "2018-12-03",
                "status": "1",
                "last_action_date": "2019-05-16",
                "last_action": "In committee: Held under submission.",
                "title": "Cannabis: Adolescent Cannabis Prevention Fund.",
                "description": "An act to add Section 26212 to the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1132020",
                "number": "AB97",
                "change_hash": "89bf2207ba77c4871438804237249c5d",
                "url": "https://legiscan.com/CA/bill/AB97/2019",
                "status_date": "2019-07-01",
                "status": "4",
                "last_action_date": "2019-07-01",
                "last_action": "Chaptered by Secretary of State - Chapter 40, Statutes of 2019.",
                "title": "Cannabis.",
                "description": "An act to amend Sections 26040, 26043, 26050.2, 26055, 26062, 26062.5, 26210, 26240, 26242, 26244, 26246, and 26248 of, and to add Section 26031.5 to, the Business and Professions Code, to amend Section 11126 of the Government Code, and to add Section 34019.5 to the Revenue and Taxation Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1196281",
                "number": "AB420",
                "change_hash": "e6d975472dcdd037cde92df05a32ad3c",
                "url": "https://legiscan.com/CA/bill/AB420/2019",
                "status_date": "2019-10-12",
                "status": "4",
                "last_action_date": "2019-10-12",
                "last_action": "Chaptered by Secretary of State - Chapter 802, Statutes of 2019.",
                "title": "The California Cannabis Research Program.",
                "description": "An act to amend Section 11362.9 of the Health and Safety Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1203084",
                "number": "AB545",
                "change_hash": "55003d615fc563bea3b20d92a3560e96",
                "url": "https://legiscan.com/CA/bill/AB545/2019",
                "status_date": "2019-04-25",
                "status": "2",
                "last_action_date": "2019-09-11",
                "last_action": "In Assembly. Concurrence in Senate amendments pending.",
                "title": "Cannabis: Bureau of Cannabis Control.",
                "description": "An act to add Section 26019.5 to the Business and Professions Code, and to amend Section 9147.7 of the Government Code, relating to cannabis."
            },
            {
                "bill_id": "1212839",
                "number": "AB858",
                "change_hash": "b68fb6a1b83ff02c2ab19a5cc9d00502",
                "url": "https://legiscan.com/CA/bill/AB858/2019",
                "status_date": "2019-10-12",
                "status": "4",
                "last_action_date": "2019-10-12",
                "last_action": "Chaptered by Secretary of State - Chapter 809, Statutes of 2019.",
                "title": "Cannabis: cultivation.",
                "description": "An act to amend Section 26061 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1213944",
                "number": "AB953",
                "change_hash": "8156ce1cbad92135ce1531f62e8129b3",
                "url": "https://legiscan.com/CA/bill/AB953/2019",
                "status_date": "2019-02-21",
                "status": "1",
                "last_action_date": "2019-03-21",
                "last_action": "Referred to Coms. on B. & F. and REV. & TAX.",
                "title": "Cannabis: state and local taxes: payment by digital asset.",
                "description": "An act to add Section 37101.3 to the Government Code, and to amend Section 34021.5 of, and to add Section 34015.5 to, the Revenue and Taxation Code, relating to taxation."
            },
            {
                "bill_id": "1214501",
                "number": "AB1288",
                "change_hash": "d127345a71ea242cec5e978ff81e55e8",
                "url": "https://legiscan.com/CA/bill/AB1288/2019",
                "status_date": "2019-05-29",
                "status": "2",
                "last_action_date": "2019-08-30",
                "last_action": "In committee: Held under submission.",
                "title": "Cannabis: track and trace.",
                "description": "An act to amend Sections 26055, 26067, and 26090 of the Business and Professions Code, and to amend Section 71041 of the Public Resources Code relating to cannabis."
            },
            {
                "bill_id": "1216131",
                "number": "AB1356",
                "change_hash": "8bd6968ea5b430d0b96fcbf4f2553fcc",
                "url": "https://legiscan.com/CA/bill/AB1356/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-05-30",
                "last_action": "Ordered to inactive file at the request of Assembly Member Ting.",
                "title": "Cannabis: local jurisdictions: retail commercial cannabis activity.",
                "description": "An act to amend Section 26200 of, and to add Section 26200.1 to, the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1216050",
                "number": "AB1417",
                "change_hash": "8ba1f5cb31a9a316e355d262274c30c1",
                "url": "https://legiscan.com/CA/bill/AB1417/2019",
                "status_date": "2019-05-23",
                "status": "2",
                "last_action_date": "2019-08-30",
                "last_action": "In committee: Held under submission.",
                "title": "Cannabis advertisement and marketing.",
                "description": "An act to amend Sections 26038 and 26151 of, and to add Section 26151.5 to, the Business and Professions Code, relating to cannabis, and making an appropriation therefor."
            },
            {
                "bill_id": "1215935",
                "number": "AB1420",
                "change_hash": "68820eab8b42f364536682b3011f5865",
                "url": "https://legiscan.com/CA/bill/AB1420/2019",
                "status_date": "2019-05-16",
                "status": "2",
                "last_action_date": "2019-08-30",
                "last_action": "In committee: Held under submission.",
                "title": "Cannabis: licensing fees.",
                "description": "An act to amend Section 26180 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1215846",
                "number": "AB1458",
                "change_hash": "8d22cde67af17d64d65aa1f0b3747778",
                "url": "https://legiscan.com/CA/bill/AB1458/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-04-23",
                "last_action": "In committee: Set, first hearing. Hearing canceled at the request of author.",
                "title": "Cannabis testing laboratories.",
                "description": "An act to amend Section 26100 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1215828",
                "number": "AB1461",
                "change_hash": "74f35b6f16cd5149f62f505895953287",
                "url": "https://legiscan.com/CA/bill/AB1461/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-04-23",
                "last_action": "In committee: Set, first hearing. Hearing canceled at the request of author.",
                "title": "Cannabis: testing laboratories.",
                "description": "An act to amend Sections 26104 and 26110 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1215700",
                "number": "AB1465",
                "change_hash": "72927b99b62d921821d82f73ca6460ee",
                "url": "https://legiscan.com/CA/bill/AB1465/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-05-16",
                "last_action": "In committee: Hearing postponed by committee.",
                "title": "Cannabis: consumption cafe/lounge license.",
                "description": "An act to amend Sections 26050, 26051, and 26070 of, and to amend the heading of Chapter 7 (commencing with Section 26070) of Division 10 of, the Business and Professions Code, and to amend Section 11362.3 of the Health and Safety Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1215436",
                "number": "AB1470",
                "change_hash": "eb00249e410018ef7e821d74eb122b5a",
                "url": "https://legiscan.com/CA/bill/AB1470/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-04-23",
                "last_action": "In committee: Set, first hearing. Hearing canceled at the request of author.",
                "title": "Cannabis testing.",
                "description": "An act to amend Section 26100 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1215657",
                "number": "AB1525",
                "change_hash": "14302f3bfbcdc03abf903f58b093c534",
                "url": "https://legiscan.com/CA/bill/AB1525/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-04-23",
                "last_action": "In committee: Set, first hearing. Hearing canceled at the request of author.",
                "title": "Cannabis: financial institutions.",
                "description": "An act to add Chapter 24 (commencing with Section 26260) to Division 10 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1216080",
                "number": "AB1529",
                "change_hash": "09574eed7b5c97c7fdfce3064396c1b6",
                "url": "https://legiscan.com/CA/bill/AB1529/2019",
                "status_date": "2019-10-12",
                "status": "4",
                "last_action_date": "2019-10-12",
                "last_action": "Chaptered by Secretary of State - Chapter 830, Statutes of 2019.",
                "title": "Cannabis vaporizing cartridges: universal symbol.",
                "description": "An act to add Section 26122 to the Business and Professions Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1216148",
                "number": "AB1678",
                "change_hash": "b6962275bb7e18d1b61f6b16d4e600ba",
                "url": "https://legiscan.com/CA/bill/AB1678/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-04-08",
                "last_action": "In committee: Set, first hearing. Hearing canceled at the request of author.",
                "title": "Indoor-Grown Cannabis Commission.",
                "description": "An act to add Chapter 2.6 (commencing with Section 65100) to Part 2 of Division 22 of the Food and Agricultural Code, relating to cannabis, and making an appropriation therefor."
            },
            {
                "bill_id": "1215607",
                "number": "AB1710",
                "change_hash": "8272dd31d901d07ea39d036a1a2bbd5e",
                "url": "https://legiscan.com/CA/bill/AB1710/2019",
                "status_date": "2019-05-28",
                "status": "2",
                "last_action_date": "2019-07-08",
                "last_action": "In committee: Set, first hearing. Hearing canceled at the request of author.",
                "title": "Cannabis.",
                "description": "An act to add Section 26203 to the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1274282",
                "number": "AB1833",
                "change_hash": "242bccc966e6e60453282e3ff12b068f",
                "url": "https://legiscan.com/CA/bill/AB1833/2019",
                "status_date": "2019-09-11",
                "status": "1",
                "last_action_date": "2019-09-12",
                "last_action": "From printer. May be heard in committee October 12.",
                "title": "Cannabis: Good Cannabis Manufacturing Practice Certification.",
                "description": "An act to amend Section 26100 of, and to add Section 26130.5 to, the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1132068",
                "number": "SB34",
                "change_hash": "386abebe4b587b3772f98f0248658054",
                "url": "https://legiscan.com/CA/bill/SB34/2019",
                "status_date": "2019-10-12",
                "status": "4",
                "last_action_date": "2019-10-12",
                "last_action": "Chaptered by Secretary of State. Chapter 837, Statutes of 2019.",
                "title": "Cannabis: donations.",
                "description": "An act to amend Sections 26001, 26153, 26161, and 26162.5 of, and to add Section 26071 to, the Business and Professions Code, and to amend Sections 34010, 34011, and 34012 of, and to add and repeal Sections 6414 and 34012.1 of, the Revenue and Taxation Code, relating to cannabis."
            },
            {
                "bill_id": "1141636",
                "number": "SB67",
                "change_hash": "ed44f8c503c05f23d14b56269a1e2a53",
                "url": "https://legiscan.com/CA/bill/SB67/2019",
                "status_date": "2019-04-04",
                "status": "2",
                "last_action_date": "2019-06-05",
                "last_action": "From committee: Do pass and re-refer to Com. on B. & P. (Ayes 8. Noes 0.) (June 5). Re-referred to Com. on B. & P.",
                "title": "Cannabis: temporary licenses.",
                "description": "An act to add and repeal Section 26050.3 of the Business and Professions Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1147536",
                "number": "SB97",
                "change_hash": "c10bea18e85c30bd15052949d2a56f5e",
                "url": "https://legiscan.com/CA/bill/SB97/2019",
                "status_date": "2019-04-11",
                "status": "2",
                "last_action_date": "2019-06-20",
                "last_action": "From committee with author's amendments. Read second time and amended. Re-referred to Com. on BUDGET.",
                "title": "Cannabis.",
                "description": "An act to amend Sections 26040, 26043, 26050.2, 26055, 26062, 26062.5, 26210, 26240, 26242, 26244, 26246, and 26248 of, and to add Section 26031.5 to, the Business and Professions Code, to amend Section 11126 of the Government Code, and to add Section 34019.5 to the Revenue and Taxation Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1182084",
                "number": "SB185",
                "change_hash": "95f14206704422ea1fee57e5f82c77e4",
                "url": "https://legiscan.com/CA/bill/SB185/2019",
                "status_date": "2019-10-12",
                "status": "4",
                "last_action_date": "2019-10-12",
                "last_action": "Chaptered by Secretary of State. Chapter 841, Statutes of 2019.",
                "title": "Cannabis: marketing.",
                "description": "An act to amend Sections 26001 and 26063 of the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1208068",
                "number": "SB305",
                "change_hash": "c17b01b1621fa23aa3ff7615ff7d0742",
                "url": "https://legiscan.com/CA/bill/SB305/2019",
                "status_date": "2019-10-12",
                "status": "5",
                "last_action_date": "2019-10-12",
                "last_action": "In Senate. Consideration of Governor's veto pending.",
                "title": "Compassionate Access to Medical Cannabis Act or Ryan’s Law.",
                "description": "An act to add Chapter 4.9 (commencing with Section 1649) to Division 2 of the Health and Safety Code, relating to health care facilities."
            },
            {
                "bill_id": "1214243",
                "number": "SB475",
                "change_hash": "d1562b5ddc2dfad9bec8a51a5a2df302",
                "url": "https://legiscan.com/CA/bill/SB475/2019",
                "status_date": "2019-05-20",
                "status": "2",
                "last_action_date": "2019-08-14",
                "last_action": "August 14 set for first hearing canceled at the request of author.",
                "title": "Cannabis: trade samples.",
                "description": "An act to add Section 26153.1 to the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1216013",
                "number": "SB581",
                "change_hash": "7d213f9402b0a47ebbceab9a8fadeaee",
                "url": "https://legiscan.com/CA/bill/SB581/2019",
                "status_date": "2019-05-23",
                "status": "2",
                "last_action_date": "2019-09-12",
                "last_action": "Ordered to inactive file on request of Assembly Member Calderon.",
                "title": "Cannabis: licensing: public records.",
                "description": "An act to add Section 26055.2 to the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1215456",
                "number": "SB595",
                "change_hash": "8abfe3f54eae9e16e768149bf228b7e0",
                "url": "https://legiscan.com/CA/bill/SB595/2019",
                "status_date": "2019-10-12",
                "status": "4",
                "last_action_date": "2019-10-12",
                "last_action": "Chaptered by Secretary of State. Chapter 852, Statutes of 2019.",
                "title": "Cannabis: state licensing fee waivers: needs-based applicants and licensees: local equity applicants and licensees.",
                "description": "An act to add Section 26249 to the Business and Professions Code, relating to cannabis."
            },
            {
                "bill_id": "1215569",
                "number": "SB627",
                "change_hash": "b8f13738f52f5ab3cc0db17770e58cc4",
                "url": "https://legiscan.com/CA/bill/SB627/2019",
                "status_date": "2019-05-23",
                "status": "2",
                "last_action_date": "2019-08-21",
                "last_action": "August 21 set for first hearing canceled at the request of author.",
                "title": "Cannabis and cannabis products: medicinal use on an animal: veterinary medicine.",
                "description": "An act to amend Sections 4825.1, 26000, 26001, 26030, 26050, 26104, 26140, and 26162.5 of, and to add Sections 4826.3 and 26003 to, the Business and Professions Code, and to amend Section 11156 of the Health and Safety Code, relating to cannabis."
            },
            {
                "bill_id": "1215812",
                "number": "SB657",
                "change_hash": "59d55f5c35c38f8581384ac9a13ce0c2",
                "url": "https://legiscan.com/CA/bill/SB657/2019",
                "status_date": "2019-09-05",
                "status": "4",
                "last_action_date": "2019-09-05",
                "last_action": "Chaptered by Secretary of State. Chapter 252, Statutes of 2019.",
                "title": "Cannabis cultivation: county agricultural commissioners: reporting.",
                "description": "An act to add Section 26069.5 to the Business and Professions Code, relating to cannabis cultivation."
            },
            {
                "bill_id": "1215532",
                "number": "SB658",
                "change_hash": "3e139732a7407ff629a4c926700ddc04",
                "url": "https://legiscan.com/CA/bill/SB658/2019",
                "status_date": "2019-02-22",
                "status": "1",
                "last_action_date": "2019-05-16",
                "last_action": "May 16 hearing: Held in committee and under submission.",
                "title": "Cannabis: licensing: cannabis retail business emblem: track and trace.",
                "description": "An act to amend Sections 26067 and 26090 of, and to add Section 26056.5 to, the Business and Professions Code, relating to cannabis, and declaring the urgency thereof, to take effect immediately."
            },
            {
                "bill_id": "1270855",
                "number": "SJR10",
                "change_hash": "b7dcda7f40c5e54531299b9bfe0ea6d1",
                "url": "https://legiscan.com/CA/bill/SJR10/2019",
                "status_date": "2019-07-02",
                "status": "1",
                "last_action_date": "2019-07-10",
                "last_action": "Re-referred to Com. on PUB. S.",
                "title": "Cannabis: federal schedules.",
                "description": "Relative to cannabis."
            }
        ],
        "org_desc": "Srucheta",
        "org_name": "Sri",
        "tags": [
            "Cannabis"
        ]
    }



    }
    console.log(org.org.bills);
    var counts = org.org.bills.reduce((p, c) => {
      var status = c.status;
      status = map[status];
      if (!p.hasOwnProperty(status)) {
        p[status] = 0;
      }
      p[status]++;
      return p;
    }, {});

    var countsExtended = Object.keys(counts).map(k => {
    return {status: k, count: counts[k]}; });
    var countArray = [];
    var statuses = [];
    countsExtended.map((ce) =>{
        countArray.push(ce.count);
        statuses.push(ce.status);
      }
    );


    console.log(countArray);
    console.log(statuses);
    



    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Capacity</p>
                        <CardTitle tag="p">150GB</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Bill Status Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardBillStatusChart.data}
                    options={dashboardBillStatusChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of bills
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
