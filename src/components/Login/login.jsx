import React, { Component } from "react";
import "./login.css";
import axios from "axios";

class Login extends Component {
  state = { uid: "", pwd: "", error: "" };
  constructor() {
    super();

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  render() {
    return (
      <div
        id="login-wrapper"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="card shadow-lg" id="login-card">
          <div className="d-flex justify-content-center align-items-center pt-3">
            <img
              className="rounded-circle"
              id="login-hero-img"
              src="/paycomProject/assets/img/brand-logo.jpg"
              alt="Hero Brand"
            />
          </div>
          <div className="card-body">
            <span className="card-title text-center">
              <h4 className="pb-2 pt-2">Paycom Summer Engagement Program</h4>

              <p className="text-secondary pb-2">
                Login or Create an Account to Get Started
              </p>
            </span>

            {this.state.error && (
              <h6 className="card-title text-center pb-1 pt-1 text-white rounded bg-danger">
                {this.state.error}
              </h6>
            )}

            <form onSubmit={this.handleLoginSubmit} className="card-text">
              <h6>Username</h6>
              <input
                type="text"
                name="uid"
                className="login-field-input mb-4"
                placeholder="Your Username/Email..."
                onChange={this.handleFieldChange}
                required
              ></input>

              <h6>Password</h6>
              <input
                type="password"
                name="pwd"
                className="login-field-input mb-3"
                placeholder="Your Password.."
                onChange={this.handleFieldChange}
                required
              ></input>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberUsr"
                  ref="rememberUsr"
                />
                <label className="form-check-label" htmlFor="rememberUsr">
                  Keep Me Logged In
                </label>
              </div>

              <div className="d-flex">
                <button
                  className="btn btn-secondary"
                  name="signup-submit"
                  type="button"
                  onClick={this.props.handleCompChange}
                >
                  Create Account
                </button>

                <button
                  className="btn btn-primary ml-auto"
                  type="submit"
                  name="login-submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: "" }); //Clear any Errors for next submit attempt (if necessary)
    axios({
      method: "post",
      url: "http://192.168.64.2/paycomProject/api/login.php",
      data: {
        loginSubmit: true,
        state: this.state,
        rememberUsr: this.refs.rememberUsr.checked,
      },
    }).then((result) => {
      console.log(result.data); //TODO: Dev only
      this.props.updateLogin("LOGIN", {
        loggedIn: true,
        uid: result.data.uid,
        userName: result.data.userName,
        email: result.data.email,
      });
      this.props.history.push("/dashboard");
    });
    // .catch((error) => {
    //   console.log(error.response); //TODO: Dev only
    //   this.setState({ error: error.response.statusText });
    // });
    this.props.history.push("/dashboard");
  };

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name, "  ", value); //TODO: Dev only
  };
}

export default Login;
