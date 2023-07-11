import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Coins from "../pages/Admin/Coins/Coins";

import Home from "../pages/Site/Home/Home";

import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "coins",
        element: <Coins />,
      },
    ],
  },
];
