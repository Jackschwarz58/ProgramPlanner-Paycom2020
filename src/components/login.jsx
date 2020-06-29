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
              <input
                type="text"
                className="login-field-input mb-4"
                required
              ></input>
              <h6>Password</h6>
              <input
                type="password"
                className="login-field-input mb-5"
                required
              ></input>
            </p>
            <div className="d-flex">
              <div className="btn btn-secondary ">Sign Up</div>
              <div className="btn btn-primary ml-auto">Login</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
