/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

class NavBar extends Component {
  render() {
    const { user, onAdd } = this.props;
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light shadow-sm "
          id="top-bar"
        >
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
                  onClick={() => onAdd()}
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
                  src={`../assets/${user.id}-profile.jpg`}
                  width="38"
                  height="38"
                  alt="??"
                  loading="lazy"
                />
                <span className="text-dark" id="user-name-label">
                  {user.userName}
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
