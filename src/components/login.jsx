import React, { Component } from "react";
import "../login.css";

class Login extends Component {
  render() {
    return (
      <div
        id="login-wrapper"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="card shadow" id="login-card">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="rounded-circle"
              id="login-hero-img"
              src="../assets/brand-logo.jpg"
              alt="Card cap"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center pb-5 pt-2">
              Paycom Summer Engagement Program
            </h4>
            <p className="card-text ">
              <h6>Username</h6>
              <input className="login-field-input mb-4"></input>
              <h6>Password</h6>
              <input className="login-field-input mb-5"></input>
            </p>
            <a href="#" className="btn btn-primary">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
