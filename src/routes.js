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
import Dashboard from "views/Dashboard.jsx";
import BillsHome from "views/BillsHome.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import BillSearch from "views/BillSearch.jsx";
import BillPreference from "views/BillPreference.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/bills",
    name: "Bills",
    icon: "nc-icon nc-paper",
    component: BillsHome,
    layout: "/admin"
  },
  {
    path: "/preferences",
    name: "My Preferences",
    icon: "nc-icon nc-settings",
    component: BillPreference,
    layout: "/admin"
  },
  {
    path: "/search",
    name: "Search",
    icon: "nc-icon nc-zoom-split",
    component: BillSearch,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin"
  }
];
export default routes;
