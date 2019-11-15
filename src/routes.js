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
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import BillsHome from "views/BillsHome.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import Bill from "views/Bill.jsx";

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
    path: "/billtracking",
    name: "Bill Tracking",
    icon: "nc-icon nc-watch-time",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/preferences",
    name: "My Preferences",
    icon: "nc-icon nc-settings",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/search",
    name: "Search",
    icon: "nc-icon nc-zoom-split",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/senator-page",
    name: "Senator Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
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
