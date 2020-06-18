/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/navbar.css";

class NavBar extends Component {
  render() {
    const dropdownStyle = {
      fontSize: ".7em",
      marginLeft: ".2em",
    };
    const titleStyle = {
      fontSize: "4em",
    };
    return (
      <div className="m-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" style={titleStyle} href="#">
            [Event Name]
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link">
                  <FontAwesomeIcon icon={faCalendarPlus} />
                </a>
              </li>
            </ul>
            <div className="ml-auto right-navbar">
              {/* <form className="form-inline my-2 my-lg-0 ml-auto">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form> */}
              <a className="navbar-brand" href="#">
                <img
                  className="navbar-img"
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
