import React, { Component } from "react";
import "./login.css"; //Ajacent CSS styling file
import axios from "axios"; //Nicer API calls
import { Redirect } from "react-router-dom"; //To connect to other pages in the app
import { updateLogin, checkLogin } from "../../helper.js"; //User Action for Redux Store

class Login extends Component {
  state = { uid: "", pwd: "", error: "", toDashboard: false };
  constructor() {
    super();
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  // This is used to see if a cookie was set and the user is already logged in. By default the cookie expires at session's end, but if the user chose to make it last longer (remeber me), that applies as well.
  // The user shouldn't have to log in again if they are already "remembered" or in an active session
  // This function is defined in helpers.js as it is used here and other places throughout the app
  componentDidMount() {
    checkLogin().then((status) => {
      if (status === 201) {
        this.setState({ toDashboard: true }); //Set redirect flag
      }
    });
  }

  //This is the handler for the submit button on the login page
  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: "" }); //Clear any Errors for next submit attempt (if necessary)
    axios({
      method: "post",
      url: "http://192.168.64.2/paycomProject/api/login.php",
      data: {
        //Sends a flag confirming call origin and the necessary info for login
        loginSubmit: true,
        state: this.state,
        rememberUsr: this.refs.rememberUsr.checked,
      },
    })
      .then(({ data }) => {
        this.userLogin(data.uid, data.userName, data.email); //Calls helper func to log user in
      })
      .catch((error) => {
        this.setState({ error: error.response.statusText }); //Status text is displayed on the page and defined in the API
      });
  };

  //This calls the store action to log the user info for global use
  userLogin = (id, name, mail) => {
    updateLogin("LOGIN", {
      loggedIn: true,
      uid: id,
      userName: name,
      email: mail,
    });
    this.setState({ toDashboard: true }); //Set redirect flag
  };

  //Keeps state up to date with user input
  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    //When these flags are set, it just redirects to that page. I liked having it where the pages are seperate routes for user and dev clarity and seperation
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    } else if (this.state.toRegister === true) {
      return <Redirect to="/register" />;
    } else {
      //The main makeup of the login page. This, like the rest of the app, makes heavy use of bootstrap libraries to ensure a nice experience on all computer screen sizes (not so much mobile right now unfortunately)
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
                <h4 className="pb-2">Paycom Summer Engagement Program</h4>

                <p className="text-secondary pb-2">
                  Login or Create an Account to Get Started
                </p>
              </span>

              {/* This is to display any error the user may have in their submission. All of these are API defined and thrown when attempting to log in */}
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
                    onClick={() => this.setState({ toRegister: true })}
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
  }
}

export default Login;
