import React, { Component } from "react";
import "./register.css";
import axios from "axios";

class Register extends Component {
  state = { uid: "", pwd: "", email: "", confirmPwd: "", error: "" };
  constructor() {
    super();

    this.handleSignUpClick = this.handleSignUpClick.bind(this);
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
              src="../assets/img/brand-logo.jpg"
              alt="Hero Image"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center pb-4 pt-2">
              Create New Account
            </h4>
            {this.state.error && (
              <h5 className="card-title text-center pb-2 pt-1 text-white rounded bg-danger">
                {this.state.error}
              </h5>
            )}
            <div className="card-text ">
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
                className="register-field-input mb-5"
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
            </div>

            <div className="d-flex">
              <div
                className="btn btn-secondary"
                type="submit"
                name="signup-submit"
                onClick={this.props.handleCompChange}
              >
                Cancel
              </div>
              <div
                className="btn btn-primary ml-auto"
                type="submit"
                name="login-submit"
                onClick={this.handleSignUpClick}
              >
                Create
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSignUpClick = (e) => {
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
        this.setState({ error: "" });
      })
      .catch((error) => {
        console.log(error.response.statusText);
        this.setState({ error: error.response.statusText });
      });
  };

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name, "  ", value);
  };
}

export default Register;
