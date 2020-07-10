import React, { Component } from "react";
import Login from "./Login/login";
import Register from "./Register/register";
import store from "../store/index";
import update_login from "../store/actions/userActions";
import { connect } from "react-redux";

class LoginApp extends Component {
  state = { isLogin: true };

  handleCompChange = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  updateLogin = (type, payload) => {
    store.dispatch(
      update_login("LOGIN", {
        loggedIn: payload.loggedIn,
        uid: payload.uid,
        userName: payload.userName,
        email: payload.email,
      })
    );
  };

  render() {
    if (!this.state.isLogin) {
      return (
        <React.Fragment>
          <Register
            handleCompChange={this.handleCompChange}
            updateLogin={this.updateLogin}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Login
            {...this.props}
            handleCompChange={this.handleCompChange}
            updateLogin={this.updateLogin}
          />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(LoginApp);
