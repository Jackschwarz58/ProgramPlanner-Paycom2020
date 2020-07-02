import React, { Component } from "react";
import "./login.css";

class Login extends Component {
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
              src="../assets/brand-logo.jpg"
              alt="Card cap"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center pb-4 pt-2">
              Paycom Summer Engagement Program
            </h4>
            <form action="scripts/userAuth.inc.php" method="post">
              <p className="card-text ">
                <h6>Username</h6>

                <input
                  type="text"
                  name="uid"
                  className="login-field-input mb-4"
                  placeholder="Your Username/Email..."
                  required
                ></input>

                <h6>Password</h6>

                <input
                  type="password"
                  name="pwd"
                  className="login-field-input mb-5"
                  placeholder="Your Password.."
                  required
                ></input>
              </p>

              <div className="d-flex">
                <div
                  className="btn btn-secondary"
                  type="submit"
                  name="signup-submit"
                >
                  Sign Up
                </div>
                <div
                  className="btn btn-primary ml-auto"
                  type="submit"
                  name="login-submit"
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
