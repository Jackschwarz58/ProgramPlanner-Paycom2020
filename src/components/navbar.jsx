/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    const dropdownStyle = {
      fontSize: ".7em",
      marginLeft: ".2em",
    };
    const titleStyle = {
      fontSize: "4em",
    };

    const profileStyle = {
      borderRadius: "50%",
    };

    const navItemStyle = {
      fontSize: "2em",
    };

    return (
      <div className="conatiner-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3">
          <a className="navbar-brand" style={titleStyle} href="#">
            My Event
          </a>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={navItemStyle}>
                <a className="nav-link">
                  <FontAwesomeIcon icon={faCalendarPlus} />
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div className="ml-5">
              <a className="navbar-brand" href="#">
                <img
                  className="navbar-img"
                  style={profileStyle}
                  src={`../assets/${this.props.user.id}-profile.jpg`}
                  width="40"
                  height="40"
                  alt=""
                  loading="lazy"
                />
                <span style={dropdownStyle}>&#9660;</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
