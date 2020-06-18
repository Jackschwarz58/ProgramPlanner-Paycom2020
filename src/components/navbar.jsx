/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

class NavBar extends Component {
  render() {
    const dropdownStyle = {
      fontSize: ".7em",
      marginLeft: ".5em",
    };
    const titleStyle = {
      fontSize: "3em",
      color: "#02BE63",
      fontWeight: "500",
    };

    const profileStyle = {
      borderRadius: "50%",
    };

    const navItemStyle = {
      fontSize: "1.15em",
    };

    return (
      <div className="conatiner-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light px-4 py-3 shadow">
          <a className="navbar-brand" style={titleStyle} href="#">
            Paycom Summer Program
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
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  style={navItemStyle}
                >
                  <a className="nav-link">
                    <FontAwesomeIcon icon={faCalendarPlus} /> Add Session
                  </a>
                </button>
              </li>
            </ul>
            <div>
              <a className="navbar-brand" href="#">
                <img
                  className="navbar-img"
                  style={profileStyle}
                  src={`../assets/${this.props.user.id}-profile.jpg`}
                  width="38"
                  height="38"
                  alt=""
                  loading="lazy"
                />
                <span style={dropdownStyle}>{this.props.user.userName}</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
