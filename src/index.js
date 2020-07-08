import React from "react";
import ReactDOM from "react-dom";
import LoginApp from "./components/LoginApp";
import DashboardApp from "./components/DashboardApp";
import "react-datepicker/dist/react-datepicker.css";
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <LoginApp />
    {/* <DashboardApp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
