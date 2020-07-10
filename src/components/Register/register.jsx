import React, { Component } from "react";
import "./register.css";
import axios from "axios";

class Register extends Component {
  state = { uid: "", pwd: "", email: "", confirmPwd: "", error: "" };
  constructor() {
    super();

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  render() {
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
              <h4 className="pb-2 pt-2">Create an Account</h4>

              <p className="text-secondary pb-2">
                Fill in Your Information and Click Create to Continue
              </p>
            </span>

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
                  onClick={this.props.handleCompChange}
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

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: "" }); //Clear any Errors for next submit attempt (if necessary)
    axios({
      method: "post",
      url: "http://192.168.64.2/paycomProject/api/signup.php",
      data: {
        signupSubmit: true,
        state: this.state,
      },
    })
      .then((result) => {
        this.props.handleCompChange();
      })
      .catch((error) => {
        console.log(error.response); //TODO: Dev only
        this.setState({ error: error.response.statusText });
      });
  };

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
}

export default Register;
