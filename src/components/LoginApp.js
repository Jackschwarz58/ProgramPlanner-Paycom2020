import React, { Component } from "react";
import Login from "./Login/login";
import Register from "./Register/register";
import store from "../store/index";
import update_login from "../store/actions/userActions";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginApp extends Component {
  state = { isLogin: true, toDashboard: false };

  componentDidMount = () => {
    axios({
      method: "post",
      url: "http://192.168.64.2/paycomProject/api/check.php",
    })
      .then(({ status, data }) => {
        if (status === 201) {
          console.log(status, " -- Cookie Found");

          this.updateLogin("LOGIN", {
            loggedIn: true,
            uid: data.login_user_id,
            userName: data.login_usr_name,
            email: data.login_usr_email,
          });
          this.setState({ toDashboard: true });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }

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
