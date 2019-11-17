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
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

import AdminLayout from "layouts/Admin.jsx";
import Bills from "./views/BillDetails/Bill.jsx";
import SponserProfile from "./views/BillDetails/SponserDetails/SponserProfile.jsx";
import BillText from "./views/BillDetails/BillText.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/signup" exact component = {SignUp}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/bill" render={props => <Bills {...props} />} />
      <Route path="/sponser" render={props => <SponserProfile {...props} />} />
      <Route path="/billtext" render={props => <BillText {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
