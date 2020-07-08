import React, { Component } from "react";
import "./login.css";
import axios from "axios";

class Login extends Component {
  state = { uid: "", pwd: "" };
  constructor() {
    super();

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  render() {
    return (
      <div
        id="login-wrapper"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="card shadow-lg" id="login-card">
          <div className="d-flex justify-content-center align-items-center pt-2">
            <img
              className="rounded-circle"
              id="login-hero-img"
              src="../assets/img/brand-logo.jpg"
              alt="Hero Image"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center pb-4 pt-2">
              Paycom Summer Engagement Program
            </h4>
            <div className="card-text ">
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
                className="login-field-input mb-5"
                placeholder="Your Password.."
                onChange={this.handleFieldChange}
                required
              ></input>
            </div>

            <div className="d-flex">
              <div
                className="btn btn-secondary"
                type="submit"
                name="signup-submit"
                onClick={this.props.handleCompChange}
              >
                Sign Up
              </div>
              <div
                className="btn btn-primary ml-auto"
                type="submit"
                name="login-submit"
                onClick={this.handleLoginClick}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleLoginClick = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://192.168.64.2/paycomProject/api/login.php",
      data: {
        loginSubmit: 1,
        uid: this.state.uid,
        pwd: this.state.pwd,
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error.response));
  };

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name, "  ", value);
  };
}

export default Login;
