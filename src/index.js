import React from "react";
import ReactDOM from "react-dom";
import LoginApp from "./components/LoginApp";
import DashboardApp from "./components/DashboardApp";
import PrivateRoute from "./components/Routes/PrivateRoute";
import "react-datepicker/dist/react-datepicker.css";
import "./css/index.css";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/index" component={LoginApp} />

        <PrivateRoute
          path="/dashboard"
          component={DashboardApp}
          isAuth={true}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
