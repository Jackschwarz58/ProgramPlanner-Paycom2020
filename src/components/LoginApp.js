import React, { Component } from "react";
import Login from "./Login/login";
import Register from "./Register/register";

class LoginApp extends Component {
  state = { isLogin: true };

  handleCompChange = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  render() {
    if (!this.state.isLogin) {
      return (
        <React.Fragment>
          <Register handleCompChange={this.handleCompChange} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Login handleCompChange={this.handleCompChange} />
        </React.Fragment>
      );
    }
  }
}

export default LoginApp;
