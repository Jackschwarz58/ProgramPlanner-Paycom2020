import React from "react";
import { Route, Redirect } from "react-router-dom";

//This is to ensure the main dashboard view cannot be accessed without a user being logged in
const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? ( //Checks if the user is authenticated and logged in
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/index", state: { from: props.location } }} //If they arent, kicks them to the login page
        />
      )
    }
  />
);

export default PrivateRoute;
