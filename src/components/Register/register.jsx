import React, { Component } from "react";
import "./register.css";
import axios from "axios"; //Nicer Fetch Calls
import { Redirect } from "react-router-dom"; //Redirect to other pages in the app

class Register extends Component {
  //Stores user form input
  state = {
    uid: "",
    pwd: "",
    email: "",
    confirmPwd: "",
    error: "",
    toDashboard: false, //Flags for page redirects
    toLogin: false,
  };
  constructor() {
    super();

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  // Calls Signup API to make the user a new account on the server
  handleSignUpSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: "" }); //Clear any Errors for next submit attempt (if necessary)
    axios({
      method: "post",
      url: "http://192.168.64.2/paycomProject/api/signup.php",
      data: {
        signupSubmit: true, //Sends flag for call origin and needed data for signup
        state: this.state,
      },
    })
      .then((result) => {
        this.setState({ toLogin: true }); //Redirect flag set
      })
      .catch((error) => {
        this.setState({ error: error.response.statusText }); //Just like the login page, the errors are displayed to the user with API defined error messages
      });
  };

  //Keeps states up to date based on current user input
  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    //When these flags are set, it just redirects to that page. I liked having it where the pages are seperate routes for user and dev clarity and seperation. Identical to Login Comp
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    } else if (this.state.toLogin === true) {
      return <Redirect to="/index" />;
    } else {
      //Main register HTML makeup. Once again, hevay bootstrap use
      return (
        <div
          id="register-wrapper"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="card shadow-lg" id="register-card">
            <div className="d-flex justify-content-center align-items-center pt-2">
              <img
                className="rounded-circle"
                id="register-hero-img"
                src="/paycomProject/assets/img/brand-logo.jpg"
                alt="Hero Brand"
              />
            </div>
            <div className="card-body">
              <span className="card-title text-center">
                <h4 className="pb-2">Create an Account</h4>

                <p className="text-secondary pb-2">
                  Fill in Your Information and Click Create to Continue
                </p>
              </span>

              {/* This is where the user facing error messages are rendered. All of these are defined in the API and store in the state */}
              {this.state.error && (
                <h6 className="card-title text-center pb-1 pt-1 text-white rounded bg-danger">
                  {this.state.error}
                </h6>
              )}

              <form className="card-text" onSubmit={this.handleSignUpSubmit}>
                <h6>
                  Username<span className="text-danger">*</span>
                </h6>
                <input
                  type="text"
                  name="uid"
                  className="register-field-input mb-4"
                  placeholder="Your Username..."
                  onChange={this.handleFieldChange}
                  required
                ></input>

                <h6>
                  Email Address<span className="text-danger">*</span>
                </h6>
                <input
                  type="text"
                  name="email"
                  className="register-field-input mb-4"
                  placeholder="Your Email..."
                  onChange={this.handleFieldChange}
                  required
                ></input>

                <h6>
                  Password<span className="text-danger">*</span>
                </h6>
                <input
                  type="password"
                  name="pwd"
                  className="register-field-input mb-4"
                  placeholder="Your Password.."
                  onChange={this.handleFieldChange}
                  required
                ></input>

                <h6>
                  Confirm Password<span className="text-danger">*</span>
                </h6>
                <input
                  type="password"
                  name="confirmPwd"
                  className="register-field-input mb-5"
                  placeholder="Confirm Password.."
                  onChange={this.handleFieldChange}
                  required
                ></input>

                <div className="d-flex">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="signup-submit"
                    onClick={() => this.setState({ toLogin: true })}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary ml-auto"
                    type="submit"
                    name="login-submit"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Register;
