/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For nice glyphs on the buttons
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons"; //Add session button
import "./navbar.css"; //Styling

//The top bar on the component page. This is where users can log out or add a session. This bar also contains the user name and a template photo for the user.
class NavBar extends Component {
  render() {
    const { user, onAdd } = this.props; //To avoid repeated code
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light shadow-sm "
          id="top-bar"
        >
          {/* Bootstrap Navbar stuff */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse pl-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm top-action-btn"
                  onClick={() => onAdd()} //Calls the parent-located function to add a new session
                >
                  <a className="text-dark">
                    <FontAwesomeIcon icon={faCalendarPlus} /> Add Session
                  </a>
                </button>
              </li>
            </ul>
            <div className="navbar-nav ml-auto top-action-btn rounded pl-2">
              <a className="navbar-brand" href="#">
                <img
                  className="rounded-circle"
                  src={`/paycomProject/assets/img/default-profile.jpg`} //I wish this was customizable but I did not think it was a necessity to spend a ton of time on
                  width="38"
                  height="38"
                  alt="??"
                  loading="lazy"
                />
                <span className="text-dark" id="user-name-label">
                  {user.userName} {/*From the defined user in the Redux store*/}
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
